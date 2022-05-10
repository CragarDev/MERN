import "./bootstrap.css";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      {/* <TimeDisplay /> */}
      <h1 className="mt-5 mb-5">
        <span className="text-success">Pokemon API</span> - A list of Pokemon
      </h1>
      <hr />
      <Pokemon />

      {/* <Coins /> */}
      {/* <People /> */}
    </div>
  );
}

export default App;
