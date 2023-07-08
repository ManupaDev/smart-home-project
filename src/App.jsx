import "./App.css";
import Header from "./components/header/header";
import DeviceCard from "./components/device-card/device-card";
import LocationChip from "./components/location-chip/location-chip";
import { useState } from "react";

function App() {
  const devices = [
    {
      image: "https://source.unsplash.com/KP7p0-DRGbg",
      location: "Living Room",
      name: "Main Light",
    },
    {
      image: "https://source.unsplash.com/sO5LtzSHpDQ",
      location: "Living Room",
      name: "Ceiling Fan",
    },
    {
      image: "https://source.unsplash.com/toX2sYnycCw",
      location: "Bed Room",
      name: "Night Light",
    },
    {
      image: "https://source.unsplash.com/ujSsIk5iZmA",
      location: "Living Room",
      name: "CCTV",
    },
  ];

  const locations = ["All", "Living Room", "Bed Room"];

  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const filteredDevices =
    selectedLocation === "All"
      ? devices
      : devices.filter((device) => {
          return device.location === selectedLocation;
        });

  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>

          {/* Menu Bar */}
          <div className="menu-bar">
            {locations.map((location, i) => {
              return (
                <LocationChip
                  key={i}
                  location={location}
                  selectedLocation={selectedLocation}
                  handleLocationSelect={handleLocationSelect}
                />
              );
            })}
          </div>
          <div className="device_container">
            {filteredDevices.map((device, i) => {
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
