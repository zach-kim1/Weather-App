import React,{useState, useEffect} from 'react'
import HourDisplay from './HourDisplay'


export default function HourWeather({hourly}) {
    
    return (
        <div>
            
            <div>
                {hourly.map((hour, i) => <HourDisplay temp={hour.temp} main={hour.weather[0].main} time={1 + i}/>)}
            </div>

        </div>
    )
}

