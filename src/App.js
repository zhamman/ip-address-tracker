import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Map from "./components/Map/Map";
import axios from "axios";
import Info from "./components/Info/Info";

function App() {
  const [info, setInfo] = useState({
    ip: "1.1.1.1", //186.153.148.88
    location: "Los Angeles, US 90001", //Hernández, AR
    timezone: "-08:00", //-03:00
    isp: "Cloudflare, Inc.", //Telecom Argentina S.A.
    long: "-118.24368", //-60.0216
    lat: "34.05223", //-32.3373
  });

  const onSearchSubmit = async term => {
    const response = await axios.get(
      "https://geo.ipify.org/api/v2/country,city?",
      {
        params: {
          apiKey: "at_zaWHnnTQjq3BvRujB30VDakmXUmIU",
          ipAddress: term,
        },
      }
    );

    setInfo({
      ip: `${response.data.ip}`,
      location: `${response.data.location.city}, ${response.data.location.country} ${response.data.location.postalCode}`,
      timezone: `${response.data.location.timezone}`,
      isp: `${response.data.isp}`,
      long: `${response.data.location.lng}`,
      lat: `${response.data.location.lat}`,
    });
  };
  // console.log(info);
  return (
    <div className="App">
      <div className="block">
        <Input onSubmit={onSearchSubmit} />
        <Info
          ip={info.ip}
          location={info.location}
          timezone={info.timezone}
          isp={info.isp}
        />
        <Map long={info.long} lat={info.lat} />
      </div>
    </div>
  );
}

export default App;
