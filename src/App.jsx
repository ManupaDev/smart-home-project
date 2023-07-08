import "./App.css";
import Header from "./components/header/header";
import DeviceCard from "./components/device-card/device-card";

function App() {
  const devices = [
    { image: "https://source.unsplash.com/KP7p0-DRGbg", name: "Main Light" },
    { image: "https://source.unsplash.com/sO5LtzSHpDQ", name: "Ceiling Fan" },
    { image: "https://source.unsplash.com/toX2sYnycCw", name: "Night Light" },
    { image: "https://source.unsplash.com/ujSsIk5iZmA", name: "CCTV" },
  ];

  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>

          <div className="device_container">
            {devices.map((device,i) => {
              return (
                <DeviceCard key={i} image={device.image} name={device.name} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
