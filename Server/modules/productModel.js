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
        default: "",
        trim: true,
      },
      discription: {
        type: String,
        default: "",
        trim: true,
      },
      tags: {
        type: String,
        trim: true,
        default: "",
      },
      Tags: {
        type: String,
        trim: true,
        default: "",
      },
      category: {
        type: String,
        default: "",
        trim: true,
      },
      Category: {
        type: String,
        default: "",
        trim: true,
      },
      quantity: {
        type: Number,
        min: [0, "Quantity must be a non-negative number"],
        default: 0,
      },
      Quantity: {
        type: Number,
        min: [0, "Quantity must be a non-negative number"],
        default: 0,
      },
      reviews: [
        {
          reviewerName: {
            type: String,
            required: true,
            trim: true,
          },
          reviewerEmail: {
            type: String,
            default: "",
            trim: true,
          },
          rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
          },
          comment: {
            type: String,
            required: true,
            trim: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );

productSchema.pre("save", function (next) {
  if (!this.description && this.discription) {
    this.description = this.discription;
  }

  if (!this.tags && this.Tags) {
    this.tags = this.Tags;
  }

  if (!this.category && this.Category) {
    this.category = this.Category;
  }

  if (!this.quantity && this.Quantity !== undefined) {
    this.quantity = this.Quantity;
  }

  next();
});

const productModel = mongoose.model("products",productSchema)
module.exports = productModel
