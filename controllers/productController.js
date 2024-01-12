// controllers/productController.js
const Product = require('../models/productModel');
const Variant = require('../models/variantModel');

// Create a product with variants
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, variants } = req.body;

    const product = new Product({ name, description, price });

    if (variants && variants.length > 0) {
      product.variants = await Variant.insertMany(variants.map(variant => ({ ...variant, product: product._id })));
    }

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('variants');
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId).populate('variants');
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a product by ID
exports.updateProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, description, price, variants } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    if (variants && variants.length > 0) {
      const updatedVariants = await Promise.all(
        variants.map(async variantData => {
          if (variantData._id) {
            return await Variant.findByIdAndUpdate(variantData._id, variantData, { new: true, runValidators: true });
          } else {
            const newVariant = new Variant({ ...variantData, product: productId });
            return await newVariant.save();
          }
        })
      );

      product.variants = updatedVariants;
      await product.save();
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a variant for a product
exports.createVariant = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, SKU, additionalCost, stockCount } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const variant = new Variant({ name, SKU, additionalCost, stockCount, product: productId });
    await variant.save();

    product.variants.push(variant._id);
    await product.save();

    res.status(201).json(variant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a variant by ID for a product
exports.updateVariant = async (req, res) => {
  try {
    const { productId, variantId } = req.params;
    const { name, SKU, additionalCost, stockCount } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const variant = await Variant.findByIdAndUpdate(
      variantId,
      { name, SKU, additionalCost, stockCount },
      { new: true, runValidators: true }
    );

    if (!variant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    res.status(200).json(variant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a variant by ID for a product
exports.deleteVariant = async (req, res) => {
  try {
    const { productId, variantId } = req.params;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await Variant.findByIdAndDelete(variantId);

    // Remove the variant ID from the product's variants array
    product.variants = product.variants.filter(v => v != variantId);
    await product.save();

    res.status(200).json({ message: 'Variant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Get all variants for a product
exports.getAllVariants = async (req, res) => {
    try {
      const productId = req.params.productId;
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const variants = await Variant.find({ product: productId });
      res.status(200).json(variants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  // Search products by name, description, or variant name
exports.searchProducts = async (req, res) => {
    try {
      const searchQuery = req.query.q; // Extract the search query from the query parameters
  
      // Use a regular expression to perform case-insensitive search
      const products = await Product.find({
        $or: [
          { name: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
          { 'variants.name': { $regex: searchQuery, $options: 'i' } },
        ],
      });
  
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };