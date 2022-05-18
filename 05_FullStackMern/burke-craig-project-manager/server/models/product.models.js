// import mongoose from "mongoose";
const mongoose = require("mongoose");

// create a database/schema for the product
const productSchema = new mongoose.Schema(
  // table/collection in the database
  {
    // these are the rows/columns//document in the table/collection
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters"]
    },
    price: {
      type: Number,
      required: [true, "Price of product is required"],
      min: [0, "Price must be at least 0"]
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"]
    }
  },
  // this sets the timestamps for createdAt and updatedAt
  { timestamps: true }
);

// create a model for the product
// this is a class that will be used to create documents
const Product = mongoose.model("Product", productSchema);

// export the model
module.exports = Product;
