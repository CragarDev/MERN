import "./bootstrap.css";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-danger bg-light text-center p-3">Todo List</h1>
        <h3 className="text-center">
          Try <span className="text-warning">to do</span> what you set out <span className="text-warning">to do</span>!
        </h3>
      </div>
      <hr />
      <div className="container mt-3">
        <TodoList />
      </div>
    </>
  );
}

export default App;
