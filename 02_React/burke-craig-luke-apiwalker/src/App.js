import "./bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import People from "./components/People";
import Planet from "./components/Planet";
import Film from "./components/Film";
import Species from "./components/Species";
import Vehicle from "./components/Vehicle";
import Starship from "./components/Starship";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <hr />
        <Switch>
          <Route exact path="/people/:id">
            <People />
          </Route>
          <Route exact path="/planets/:id">
            <Planet />
          </Route>
          <Route exact path="/films/:id">
            <Film />
          </Route>
          <Route exact path="/species/:id">
            <Species />
          </Route>
          <Route exact path="/vehicles/:id">
            <Vehicle />
          </Route>
          <Route exact path="/starships/:id">
            <Starship />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
