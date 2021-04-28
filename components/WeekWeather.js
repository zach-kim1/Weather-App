import React from "react";
import WeekDisplay from './WeekDisplay'

export default function WeekWeather({daily}) {

return (
    <div>
        
        <div>
            {daily.map((day, i) => <WeekDisplay maxtemp={day.temp.max} mintemp = {day.temp.min} main={day.weather[0].main} time={ i}/>)}
        </div>

    </div>
)
}
