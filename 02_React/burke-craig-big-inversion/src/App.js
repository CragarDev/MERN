import "./App.css";
import "./bootstrap.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <div className="container flex mt-3 w-25">
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age={85} hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Blonde" />
      </div>
    </>
  );
}

export default App;
