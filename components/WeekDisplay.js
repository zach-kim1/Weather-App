import React, {  useState, useEffect } from "react";
import "./WeekDisplay.css"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import Grain from '@material-ui/icons/Grain';

export default function WeekDisplay({ maxtemp, main, time,mintemp }) {
    const [icon, setIcon] = useState("")

    useEffect(() => {
        if(main ==="Clear"){
            setIcon(<WbSunnyIcon/>)
        }else if(main ==="Rain"){
            setIcon(<Grain/>)
        }else if(main ==="Clouds"){
            setIcon(<CloudIcon/>)
        }
    }, [main])
    return (
        <div className="weeklyDisplay">
        <p className="time" >{time} Day from Today </p>
        <p className="maxtemp" >Max Temp: {maxtemp} ° F</p>
        <p className="mintemp" >Min Temp: {mintemp} ° F</p>
        <p className ="icon">{icon}</p>
        <p className="main" >{main}</p>
        
    </div>
    )
}