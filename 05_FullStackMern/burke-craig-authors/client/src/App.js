import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./bootstrap.css";
import Button from "./components/Button";
import AllAuthors from "./components/AllAuthors";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  // set up a toggle for the new author form
  const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1 className="p-3 text-warning">Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <Link className="m-2" to="/new">
              <Button color="green" text="Add New Author" />
            </Link>

            <hr />
            <AllAuthors newAuthorToggle={newAuthorToggle} />
          </Route>
          <Route exact path="/new">
            <Link className="m-2" to="/">
              <Button color="blue" text="Home" />
            </Link>
            <hr />
            <NewAuthor newAuthorToggle={newAuthorToggle} setNewAuthorToggle={setNewAuthorToggle} />
          </Route>
          <Route exact path="/edit/:_id">
            <Link className="m-2" to="/">
              <Button color="blue" text="Home" />
            </Link>
            <Link className="m-2" to="/new">
              <Button color="green" text="Add New Author" />
            </Link>
            <hr />
            <EditAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
