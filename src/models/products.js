const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: Number,
      unique: true,
    },
    product_name: {
      type: String,
    },
    product_description: {
      type: String,
    },
    product_prize: {
      type: mongoose.Schema.Types.Decimal128,
      validate: {
        validator: (req) => {
          return true;
        },
        message: 'prize must be a number',
      },
    },
    product_enabled: {
      type: Boolean,
    },
    product_promotion: {
      promotion_name: {
        type: String,
      },
      promotion_description: {
        type: String,
      },
      promotion_enabled: {
        type: Boolean,
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = new mongoose.Model('products', ProductSchema);

module.exports = ProductModel;
