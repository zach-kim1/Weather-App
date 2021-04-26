import React from 'react'

export default function CurrentWeather({weather}) {
   
//{weather.weather[0].description}
return(
    <div>
        <h3>Current Weather</h3>
        <p>{weather.name}</p>
        <p>{weather.main.temp}°F</p>
        <p>{weather.weather[0].description}</p>
    </div>
)
}