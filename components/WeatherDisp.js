import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_api_key;

export default function WeatherDisp({weather}) {
  const [Hrweather, setHrWeather] = useState(null);

  const fetch2DayWeather = () =>{
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", weather.coord.lat);
    url.searchParams.append("lon", weather.coord.lon);
    url.searchParams.append("exclude", "currentminutelydailyalerts");
    url.searchParams.append("appid", API_KEY);
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        // also important to check html error codes
        // 200 means no errors
        if (obj.cod === 200) {
          setHrWeather(obj);
        } else {
          setHrWeather(false);
        }
      });
    };


    return(
      <h1>{weather.weather[0].description}</h1>
    )   

}