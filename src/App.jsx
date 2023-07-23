import { Outlet } from "react-router-dom";
import "./App.css";
import NavIcon from "./components/nav-icon/nav-icon.jsx";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavIcon route="home" />
        <NavIcon route="settings" />
      </div>
      <div className="widgets"></div>
      <Outlet />
    </div>
  );
}

export default App;
