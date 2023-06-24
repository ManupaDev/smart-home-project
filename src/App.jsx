import "./App.css";
import Header from "./components/header/header";
import DeviceCard from "./components/device-card/device-card";

function App() {
  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>
          <div className="device_container">
            <DeviceCard
              image="https://source.unsplash.com/KP7p0-DRGbg"
              name="Main Light"
            />
            <DeviceCard
              image="https://source.unsplash.com/sO5LtzSHpDQ"
              name="Ceiling Fan"
            />
            <DeviceCard
              image="https://source.unsplash.com/toX2sYnycCw"
              name="Night Light"
            />
            <DeviceCard
              image="https://source.unsplash.com/ujSsIk5iZmA"
              name="CCTV"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
