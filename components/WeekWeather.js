import React, {  useState } from "react";
import WeekDisplay from './WeekDisplay'

export default function WeekWeather({hourly}) {
    var today = new Date()

return (
    <div>
        
        <div>
            {hourly.map((hour, i) => <WeekDisplay temp={hour.temp} main={hour.weather[0].main} time={1 + i}/>)}
        </div>

    </div>
)
}
