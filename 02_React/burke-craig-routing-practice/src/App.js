import "./bootstrap.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <Link to="/home">
              <li>home</li>
            </Link>
            <Link to="/42">
              <li>42</li>
            </Link>
            <Link to="/hello">
              <li>hello</li>
            </Link>
            <Link to="/hello/blue">
              <li>hello/blue</li>
            </Link>
            <Link to="/hello/blue/green">
              <li>hello/blue/green</li>
            </Link>
            <Link to="/hello/yellow/purple">
              <li>hello/yellow/purple</li>
            </Link>
          </ul>
        </div>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/:var1">
            <Number />
          </Route>
          <Route exact path="/:var1/:color1">
            <Number />
          </Route>
          <Route exact path="/:var1/:color1/:color2">
            <Number />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
