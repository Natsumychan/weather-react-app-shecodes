import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css"

export default function WeatherForecast(){
 return (
  <div className="weatherForecast">
   <div className="row">
    <div className="col">
     <div className="weatherForecast-day">     Thu
     </div> 
     <WeatherIcon width="44" height="44"/>
     <div className="forecast-temperatures">
      <span className="weather-forecast-temperature-max">19°</span>
      <span className="weather-forecast-temperature-min">10°</span>
     </div>
    </div>
   </div>
  </div>
 )
}