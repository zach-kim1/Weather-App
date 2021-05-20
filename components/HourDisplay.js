import React, { useEffect, useState } from "react";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import Grain from '@material-ui/icons/Grain';
import "./styles/HourDisplay.css"
export default function HourDisplay({ temp, main, time }) {
    const [icon, setIcon] = useState("")

    useEffect(() => {
        function iconChoice(main){
        if(main ==="Clear"){
            setIcon(<WbSunnyIcon/>)
        }else if(main ==="Rain"){
            setIcon(<Grain/>)
        }else if(main ==="Clouds"){
            setIcon(<CloudIcon/>)
        }
        }
        iconChoice(main)
    }, [main])
    return (
        <div className="hourlyDisplay">
        <p className="time" >{time} Hours from now </p>
        <p className="temp" > {temp}° F</p>
        <p className ="icon">{icon}</p>
        <p className="main" >{main.toUpperCase()}</p>
        
    </div>
    )
}