import React, {  useState } from "react";

export default function WeekDisplay({ temp, main, time }) {

    return (
        <div className="hourlyDisplay">
        <p className="time">{time} Hours from now </p>
        <p className="temp"><span style={{ fontSize: "22px", fontWeight: "600" }}> {temp}° F</span></p>
        <p className="main">{main.toUpperCase()}</p>
        
    </div>
    )
}