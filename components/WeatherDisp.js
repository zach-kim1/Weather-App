import { ButtonGroup, Button } from "@material-ui/core";
import React, {  useState } from "react";
import HourWeather from "./HourWeather";

const API_KEY = process.env.REACT_APP_api_key;

export default function WeatherDisp({weather}) {
  const [Hrweather, setHrWeather] = useState(null);

  const fetch2DayWeather = () =>{
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", weather.coord.lat);
    url.searchParams.append("lon", weather.coord.lon);
    url.searchParams.append("exclude", "current,minutely,alerts");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial")

    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
          setHrWeather(obj);
      });
    };

//<pre>{JSON.stringify(Hrweather, undefined, 4)}</pre>
/*      
      <HourWeather hourly = {Hrweather.hourly[0]}></HourWeather>
<h1>{Hrweather.lon} </h1> 

*/
    return(
      <div>

      <ButtonGroup>
        <Button
        onClick = {fetch2DayWeather}
        >
        Hourly
        </Button>
        <Button
        onClick = {fetch2DayWeather}>
        Daily
        </Button>
      </ButtonGroup>
      
      <pre>{JSON.stringify(Hrweather, undefined, 4)}</pre>

      </div>
    )   

}