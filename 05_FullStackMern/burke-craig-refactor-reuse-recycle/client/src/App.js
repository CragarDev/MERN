import "./bootstrap.css";
import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ProductForm from "./components/ProductForm";
import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import Button from "./components/Button";
import UpdateProductForm from "./components/UpdateProductForm";

function App() {
  // set up a toggle for after the ProductForm is submitted
  const [newProductToggle, setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager</h1>

        <Link className="me-2" to="/products">
          <Button color="pink" text="get all products" />
        </Link>
        <Link to="/products/new">
          <Button color="green" text="create new product" />
        </Link>
        <hr />

        <Switch>
          <Route exact path="/">
            {/* sending the product toggle and the setter to the form */}
            <ProductForm newProductToggle={newProductToggle} setNewProductToggle={setNewProductToggle} />
            <hr />
            {/* sending the toggle to the AllProducts */}
            <AllProducts newProductToggle={newProductToggle} />
          </Route>
          <Route exact path="/products">
            <hr />
            {/* sending the toggle to the AllProducts */}
            <AllProducts newProductToggle={newProductToggle} />
          </Route>
          <Route exact path="/products/new">
            <hr />
            {/* sending the product toggle and the setter to the form */}
            <ProductForm newProductToggle={newProductToggle} setNewProductToggle={setNewProductToggle} />
          </Route>
          <Route exact path="/products/:_id">
            <h3>Details Page</h3>
            <br />
            <OneProduct />
          </Route>
          <Route exact path="/products/update/:_id">
            <h3>Update Page</h3>
            <br />
            <UpdateProductForm />
          </Route>
          {/* <Route exact path="/products/delete/:_id">
            <h3>Delete Confirmation</h3>
            <br />
            <DeleteProductConfirm />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
