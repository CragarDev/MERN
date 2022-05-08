import "./App.css";
import "./bootstrap.css";
import BoxGen from "./components/BoxGen";

function App() {
  return (
    <>
      <div className="container text-center w-75 p-3">
        <h1 className="">Box Generator</h1>
        <h3 className="">Pick Your Color and Pick Your Size!</h3>
      </div>
      <div className="container text-center mt-3">
        <BoxGen />
      </div>
    </>
  );
}

export default App;
