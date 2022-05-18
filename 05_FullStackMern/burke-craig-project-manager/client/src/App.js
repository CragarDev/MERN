import "./bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager</h1>

        {/* <Link to="/ninjas">
          <Button color="pink" text="get all ninjas" />
        </Link> */}
        <hr />

        <Switch>
          <Route exact path="/products">
            <ProductForm />
            <hr />
            {/* <AllNinjas /> */}
          </Route>
          {/* <Route exact path="/ninjas/:_id">
            <h3>Details Page</h3>
            <br />
            <OneNinja />
          </Route> */}
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
