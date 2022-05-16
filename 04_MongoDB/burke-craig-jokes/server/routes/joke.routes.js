// import controller
const JokeControllers = require("..//controllers/joke.controller");

// export routes
module.exports = (app) => {
  // put static routes at the top and dynamic routes at the bottom
  // testing connection with sayHello
  app.get("/api/hello", JokeControllers.sayHello);
  // getting all the jokes
  app.get("/api/jokes", JokeControllers.getAllJokes);
  // getting jokes count
  app.get("/api/jokes/count", JokeControllers.getCountOfJokes);
  // getting one random joke
  app.get("/api/jokes/random", JokeControllers.getOneRandomJoke);
  // getting one random joke v2
  app.get("/api/jokes/random2", JokeControllers.getOneRandomJoke2);
  // getting one joke
  app.post("/api/jokes/new", JokeControllers.createJoke);
  // updating a joke
  app.get("/api/jokes/:_id", JokeControllers.getOneJoke);
  // creating a new joke
  app.put("/api/jokes/update/:id", JokeControllers.updateExistingJoke);
  // deleting a joke
  app.delete("/api/jokes/delete/:id", JokeControllers.deleteJoke);
};
