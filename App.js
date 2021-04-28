 
import React, { useState } from "react";
import WeatherDisp from "./components/WeatherDisp";
import CurrentWeather from "./components/CurrentWeather";

import { Input, Button } from "@material-ui/core";
const API_KEY = process.env.REACT_APP_api_key;


function App() {
  const [zipEntered,setZipStatus] = useState(false)
  const [zipCode, setzipCode] = useState(0);
  const [weather, setWeather] = useState(null);
  const [cityEntered,setCityStatus] = useState(false)
  const [city, setCity] = useState("");

  const handleZipChange = (e) => {
    setzipCode(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  function getWeather(){
  if(zipCode!==0){
    setZipStatus(true)
    setCityStatus(true)

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
    }
  else if(city!==""){
    setCityStatus(true)
    setZipStatus(true)
    const url = new URL("https://api.openweathermap.org/data/2.5/weather")
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("q", city);
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
  }
}

 // <pre>{JSON.stringify(weather, undefined, 4)}</pre>
 if (zipEntered ===false &&cityEntered===false) {
  return(
  <div style = {{display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
    <div style = {{display: 'flex', justifyContent: 'center'}}><Input  type="number" value={zipCode} onChange={handleZipChange} /> Enter Zip</div>
    <div style = {{display: 'flex', justifyContent: 'center'}}><Input  type="string" value={city} onChange={handleCityChange} />Enter City</div>
    <Button align="center" onClick={getWeather}>Fetch Weather!</Button>
  </div>
  )}
  else if(weather){
    return(
    <div>
    <div style={{ textAlign: "center" }}>
    <CurrentWeather weather = {weather}></CurrentWeather>
    </div>
    <div style={{ textAlign: "center" }}>

    <WeatherDisp weather = {weather}></WeatherDisp> 
    </div>
    </div>
    )
  }else{
    return (<h1>Loading</h1>)
  }
  
}
export default App;
