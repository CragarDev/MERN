// import controller
const AuthorControllers = require("../controllers/author.controller");

// export routes
module.exports = (app) => {
  // put static routes at the top and dynamic routes at the bottom
  // testing connection with sayHello
  app.get("/api/hello", AuthorControllers.sayHello);
  // getting all the author
  app.get("/api/authors", AuthorControllers.getAllAuthors);
  // // getting authors count
  app.get("/api/authors/count", AuthorControllers.getCountOfAuthors);
  // // getting one random author
  app.get("/api/authors/random", AuthorControllers.getOneRandomAuthor);
  // // getting one random author v2
  app.get("/api/authors/random2", AuthorControllers.getOneRandomAuthor2);
  // // getting one author
  app.post("/api/authors/new", AuthorControllers.createAuthor);
  // // updating a author
  app.get("/api/authors/:_id", AuthorControllers.getOneAuthor);
  // // creating a new author
  app.put("/api/authors/:id", AuthorControllers.updateExistingAuthor);
  // // deleting a author
  app.delete("/api/authors/:id", AuthorControllers.deleteAuthor);
};
