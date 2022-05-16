// import mongoose
const mongoose = require("mongoose");

// mongoose connection here
mongoose
  .connect("mongodb+srv://cragardev:1234567890Cb@dojo-mean-may.ckqcp.mongodb.net/jokes_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Ok Craig, Now we have established a connection to the database - jokes_db"))
  .catch((err) => console.log("Uh-ooh, Craig, Something has gone wrong when connecting to the database, you had better check on it. look here: ", err));
