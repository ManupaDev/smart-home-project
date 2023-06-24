import "./App.css";

function App() {

  const username = "Manupa"; 
  const age = 22;

  return (
    <div className="container">
      <h1 className="greeting">Hello, {username}, You are {age} years old</h1>
      <h3>Your devices are under your control.</h3>
    </div>
  );
}

export default App;
