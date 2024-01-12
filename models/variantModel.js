// | ecommerce-application
// |---|config
// |---|---|db.js
// |---|controllers
// |---|cypress
// |---|---|downloads
// |---|---|e2e
// |---|---|fixtures
// |---|---|integration
// |---|---|support
// |---|---|---|productForm.spec.js
// |---|---|productController.js
// |---|routes
// |---|---|routes.js
// |---|models
// |---|---|productModel.js
// |---|---|variantModel.js
// |---|app.js
// |---|package.json
// |---|__tests__
// |---|---|productModel.test.js



// models/variantModel.js
const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  SKU: { type: String, required: true },
  additionalCost: { type: Number, default: 0 },
  stockCount: { type: Number, default: 0 },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
});

const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;
