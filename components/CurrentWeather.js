import React, {useState,useEffect} from 'react'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import Grain from '@material-ui/icons/Grain';
export default function CurrentWeather({weather}) {
    const [icon, setIcon] = useState("")

    useEffect(() => {
        function iconChoice(){
        if(weather.weather[0].main ==="Clear"){
            setIcon(<WbSunnyIcon/>)
        }else if(weather.weather[0].main ==="Rain"){
            setIcon(<Grain/>)
        }else if(weather.weather[0].main ==="Clouds"){
            setIcon(<CloudIcon/>)
        }
        }
        iconChoice()
    }, [weather.weather])
//{weather.weather[0].description}
return(
    <div>
        <h3 style={{ color : "#b80000"}}>{weather.name}</h3>
        <h1>{weather.main.temp}°F</h1>
        <p>{icon}{weather.weather[0].main}</p>
    </div>
)
}