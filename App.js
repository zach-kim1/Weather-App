import React, { useEffect, useState } from "react";
import WeatherDisp from "./components/WeatherDisp";
import { Input, Button } from "@material-ui/core";
const API_KEY = process.env.REACT_APP_api_key;


function App() {
  const [zipEntered,setZipStatus] = useState(false)
  const [zipCode, setzipCode] = useState(22903);
  const [weather, setWeather] = useState(null);

  const handleZipChange = (e) => {
    setzipCode(e.target.value);
  };

  const fetchWeather = () =>{
    setZipStatus(true)
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("zip", zipCode);
    url.searchParams.append("units", "imperial");
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        // also important to check html error codes
        // 200 means no errors
        if (obj.cod === 200) {
          setWeather(obj);
        } else {
          setWeather(false);
        }
      });
    };

  if (zipEntered ===false) {
    return(
    <div>
    <Input type="number" value={zipCode} onChange={handleZipChange} />
    <Button onClick={fetchWeather}>Go!</Button>
    </div>
    )
  }

  if(weather){
  return (
    <div style={{ textAlign: "center" }}>
    <pre>{JSON.stringify(weather, undefined, 4)}</pre>

      <WeatherDisp
        weather = {weather}
      > 
      </WeatherDisp> 
    </div>

    );
  }else{
    return (<h1>Loading</h1>)
  }
  
}
export default App;