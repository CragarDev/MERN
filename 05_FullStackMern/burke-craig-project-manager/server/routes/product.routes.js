// import controller
const ProductControllers = require("../controllers/product.controller");

// export routes
module.exports = (app) => {
  // put static routes at the top and dynamic routes at the bottom
  // testing connection with sayHello
  app.get("/api/hello", ProductControllers.sayHello);
  // getting all the product
  app.get("/api/products", ProductControllers.getAllProducts);
  // // getting products count
  app.get("/api/products/count", ProductControllers.getCountOfProducts);
  // // getting one random product
  app.get("/api/products/random", ProductControllers.getOneRandomProduct);
  // // getting one random product v2
  app.get("/api/products/random2", ProductControllers.getOneRandomProduct2);
  // // getting one product
  app.post("/api/products/new", ProductControllers.createProduct);
  // // updating a product
  app.get("/api/products/:_id", ProductControllers.getOneProduct);
  // // creating a new product
  app.put("/api/products/update/:id", ProductControllers.updateExistingProduct);
  // // deleting a product
  app.delete("/api/products/delete/:id", ProductControllers.deleteProduct);
};
