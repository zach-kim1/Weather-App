import { ButtonGroup, Button } from "@material-ui/core";
import React, {  useState } from "react";
import HourWeather from "./HourWeather";
import WeekWeather from "./WeekWeather";

const API_KEY = process.env.REACT_APP_api_key;

export default function WeatherDisp({weather}) {
  const [Hrweather, setHrWeather] = useState(null);
  const [HrDayToggle, setHrDayToggle] = useState(false);


  function fetch2DayWeather(){
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.append("appid", API_KEY)
    url.searchParams.append("lon", weather.coord.lon)
    url.searchParams.append("lat", weather.coord.lat)
    url.searchParams.append("exclude", "current,minutely,alerts")
    url.searchParams.append("units", "imperial")
    fetch(url).then(res => res.json()).then(obj => setHrWeather(obj))
  }
//<pre>{JSON.stringify(Hrweather, undefined, 4)}</pre>
/*      
      <HourWeather hourly = {Hrweather.hourly[0]}></HourWeather>
<h1>{Hrweather.lon} </h1> 
 <HourWeather hourly = {Hrweather.hourly}></HourWeather>
*/
if(!Hrweather){
    return(
      <div>
      <ButtonGroup align = "center">
        <Button
        onClick = {()=>{setHrDayToggle(false); fetch2DayWeather();}}
        >
        Hourly
        </Button>
        <Button
        onClick = {()=>{setHrDayToggle(true); fetch2DayWeather();}}>
        Daily
        </Button>
        </ButtonGroup>  

      </div>
    )   
    }else if(Hrweather){
      return(
        <div>
          <div align="center">

        <ButtonGroup
        align = "center"
        >
        <Button
        textAlign = "center"
        onClick =  {()=>{setHrDayToggle(false); fetch2DayWeather();}}>
        Hourly
        </Button>
        <Button
        textAlign = "center"
        onClick = {()=>{setHrDayToggle(true); fetch2DayWeather();}}>
        Daily
        </Button>
        </ButtonGroup>     
      </div>
      <div>{HrDayToggle ? (Hrweather ? <WeekWeather daily={Hrweather.daily} /> : null) : (Hrweather ? <HourWeather hourly={Hrweather.hourly} /> : null)}  </div>
      </div>
      )
    }
}