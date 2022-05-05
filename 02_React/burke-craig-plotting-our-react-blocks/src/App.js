import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SubComponent from "./components/SubComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
