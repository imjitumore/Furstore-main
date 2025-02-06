const mongoose = require("mongoose")
require("../config")

const productSchema = new mongoose.Schema(
    {
      image: {
        type: String,
        required: [true, "Product image is required"], // Validation: image is required
      },
      name: {
        type: String,
        required: [true, "Product name is required"], // Validation: name is required
        trim: true, // Remove extra spaces
        maxlength: [100, "Product name should not exceed 100 characters"],
      },
      price: {
        type: Number,
        required: [true, "Product price is required"], // Validation: price is required
        min: [0, "Price must be a positive number"], // Price cannot be negative
      },
      description: {
        type: String,
        required: [true, "Product description is required"], // Validation: description is required
        trim: true, // Remove extra spaces
      },
      tags: {
        type: String,
        trim: true, // Ensure tags have no extra spaces
        default: "", // Default value for tags
      },
      category: {
        type: String,
        required: [true, "Product category is required"], // Validation: category is required
        trim: true,
      },
      quantity: {
        type: Number,
        required: [true, "Product quantity is required"], // Validation: quantity is required
        min: [0, "Quantity must be a non-negative number"], // Quantity cannot be negative
        default: 0, // Default value for quantity
      },
    },
    {
      timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    }
  );

const productModel = mongoose.model("products",productSchema)
module.exports = productModel
