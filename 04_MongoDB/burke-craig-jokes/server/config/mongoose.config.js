// import mongoose
const mongoose = require("mongoose");
const db_name = "jokes_db";
const db_login = "cragardev";
const db_pw = "1234567890Cb";

// mongoose connection here
mongoose
  .connect(`mongodb+srv://${db_login}:${db_pw}@dojo-mean-may.ckqcp.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Ok Craig, Now we have established a connection to the database - ${db_name}`))
  .catch((err) => console.log(`Uh-ooh, Craig, Something has gone wrong when connecting to the database: ${db_name}, you had better check on it. look here: `, err));
