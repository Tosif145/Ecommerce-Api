
// Import the Product model
const Product = require('../models/productModel');
const Variant = require('../models/variantModel');
// routes/routes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Products
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);

// Search products by name, description, or variant name
router.get('/products/search', productController.searchProducts);
router.get('/products/:productId', productController.getProductById);
router.put('/products/:productId', productController.updateProductById);
router.delete('/products/:productId', productController.deleteProductById);

// Variants
router.get('/products/:productId/variants', productController.getAllVariants);

// router.post('/products/:productId/variants', productController.createVariant);
router.put('/products/:productId/variants/:variantId', productController.updateVariant);
router.delete('/products/:productId/variants/:variantId', productController.deleteVariant);


// Inside your route or controller
router.post('/products/:productId/variants', async (req, res) => {
    try {
      const productId = req.params.productId;
      const { name, SKU, additionalCost, stockCount } = req.body;
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const variant = new Variant({ name, SKU, additionalCost, stockCount, product: productId });
      await variant.save();
  
      // Ensure that product.variants is an array
      product.variants = product.variants || [];
  
      product.variants.push(variant._id);
      await product.save();
  
      res.status(201).json(variant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  

 

module.exports = router;
