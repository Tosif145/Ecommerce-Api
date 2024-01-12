// models/productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  // ... other fields
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variant' }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
