// import mongoose from "mongoose";
const mongoose = require("mongoose");

// create a database/schema for the author
const authorSchema = new mongoose.Schema(
  // table/collection in the database
  {
    // these are the rows/columns//document in the table/collection
    author: {
      type: String,
      required: [true, "Author name is required"],
      minlength: [3, "Author name must be at least 3 characters"]
    }
  },
  // this sets the timestamps for createdAt and updatedAt
  { timestamps: true }
);

// create a model for the product
// this is a class that will be used to create documents
const Author = mongoose.model("Author", authorSchema);

// export the model
module.exports = Author;
