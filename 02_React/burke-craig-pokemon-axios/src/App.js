import "./bootstrap.css";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <h1 className="mt-5 mb-5">
        <span className="text-success">Pokemon Axios</span> - A list of Pokemon
      </h1>
      <hr />
      <Pokemon />
    </div>
  );
}

export default App;
