import "./bootstrap.css";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <div className="container text-center w-75 p-3">
        <h1 className="text-warning">Tabs</h1>
        <h3 className="">Click each tab for more information!</h3>
      </div>
      <div className="container text-center mt-3">
        <Tabs />
      </div>
    </>
  );
}

export default App;
