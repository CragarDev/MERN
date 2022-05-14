const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Faker data
const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this._id = faker.random.numeric(6);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email(this.firstName, this.lastName);
    this.phoneNumber = faker.phone.phoneNumber();
    this.password = faker.random.alphaNumeric(16);
  }
}

// const user1 = new User();
// const user2 = new User();

// console.log(user1);
// console.log(user2);

class Company {
  constructor() {
    this._id = faker.random.numeric(5);
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    };
  }
}

// const company1 = new Company();
// const company2 = new Company();

// console.log(company1);
// console.log(company2);

//? ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷  ROUTES ÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET (READ) / ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// req is short for request
// res is short for response
app.get("/", (req, res) => {
  let printString = `Hello and Welcome to the server!`;

  // res is the response object that is sent back to the client (browser) when the get request is made to the server
  res.send(printString);
  // res.send("Our express api server is now sending this over to the browser");
});
//
//@ ===================================================================
//

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET (READ) /api/users/new ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// route for users endpoint
// GET /users
app.get("/api/users/new", (req, res) => {
  let newUser = new User();
  res.json(newUser);
});
//
//@ ===================================================================
//

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET (READ) /api/companies/new ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// route for users endpoint
// GET /users
app.get("/api/companies/new", (req, res) => {
  let newCompany = new Company();
  res.json(newCompany);
});
//
//@ ===================================================================
//

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET (READ) /api/user/company/new ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// route for users endpoint
// GET /users
app.get("/api/user/company", (req, res) => {
  let newCompany = new Company();
  let newUser = new User();
  res.json({ newCompany, newUser });
});
//
//@ ===================================================================
//

//
//
//
//

//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//@ :::::: These lines must be at the bottom of the file ---------------
//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const server = app.listen(port, () => {
  console.log(`Server is locked and loaded on port ${server.address().port}!`);
});
