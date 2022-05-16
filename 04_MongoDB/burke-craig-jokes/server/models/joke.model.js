// import mongoose from "mongoose";
const mongoose = require("mongoose");

// create a database/schema for the jokes api
const JokesSchema = new mongoose.Schema(
  // the table/collection in the database
  {
    // these are the rows/cols//document in the table/collection
    setup: {
      type: String,
      required: [true, "Setup is required"],
      minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
      type: String,
      required: [true, "Punchline is required"],
      minlength: [3, "Punchline must be at least 3 characters long"]
    }
  },
  // this sets the timestamps for createdAt and updatedAt
  { timestamps: true }
);

// create a model for the jokes api
// this is a class that we can use to create instances of the jokes api
const Joke = mongoose.model("Joke", JokesSchema);

// export the model so that we can use it in other files
module.exports = Joke;
