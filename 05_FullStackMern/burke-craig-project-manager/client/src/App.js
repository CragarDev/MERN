import "./bootstrap.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import ProductForm from "./components/ProductForm";
import AllProducts from "./components/AllProducts";
import OneProduct from "./components/OneProduct";
import Button from "./components/Button";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager</h1>

        <Link to="/products">
          <Button color="pink" text="get all products" />
        </Link>
        <hr />

        <Switch>
          <Route exact path="/products">
            <ProductForm />
            <hr />
            <AllProducts />
          </Route>
          <Route exact path="/products/:_id">
            <h3>Details Page</h3>
            <br />
            <OneProduct />
          </Route>
          {/* <Route exact path="/ninjas/update/:_id">
            <h3>Update Page</h3>
            <br />
            <UpdateNinjaForm />
          </Route> */}
          {/* <Route exact path="/ninjas/delete/:_id">
            <h3>Delete Confirmation</h3>
            <br />
            <DeleteNinjaConfirm />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
