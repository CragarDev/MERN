// import controller
const JokeControllers = require("..//controllers/joke.controller");

// export routes
module.exports = (app) => {
  // testing connection with sayHello
  app.get("/api/hello", JokeControllers.sayHello);
  // getting all the jokes
  app.get("/api/jokes", JokeControllers.getAllJokes);
  // getting jokes count
  app.get("/api/jokes/count", JokeControllers.getCountOfJokes);
  // getting one random joke
  app.get("/api/jokes/random", JokeControllers.getOneRandomJoke);
  // getting one joke
  app.get("/api/jokes/:_id", JokeControllers.getOneJoke);
  // creating a new joke
  app.post("/api/jokes/new", JokeControllers.createJoke);
  // updating a joke
  app.put("/api/jokes/update/:id", JokeControllers.updateExistingJoke);
  // deleting a joke
  app.delete("/api/jokes/delete/:id", JokeControllers.deleteJoke);
};
