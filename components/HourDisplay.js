import React, {  useState } from "react";

export default function HourDisplay({ temp, main, time }) {

    return (
        <div className="hourDisplay">

            <p className="temp"><span style={{ fontSize: "22px", fontWeight: "600" }}> {temp}°</span></p>
            <p>{main}°F</p>
            <p className="time">{time}</p>
        </div>
    )
}