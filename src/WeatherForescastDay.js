import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay(props){
 function maxTempetrature(){
  let temperature=Math.round(props.forecastData.temperature.maximum);
  return `${temperature}°`
 }

 function minTempetrature(){
  let temperature=Math.round(props.forecastData.temperature.minimum);
  return `${temperature}°`
 }

 function day(){
  let date= new Date(props.forecastData.time * 1000);
  let day = date.getDay();
  let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  return days[day];
 }

 return(
  <>
   <div className="weatherForecast-day">{day()}</div> 
       <WeatherIcon icon={props.forecastData.condition.icon_url}  iconDescription={props.forecastData.condition.icon} width="50" height="50"/>
       <div className="forecast-temperatures">
        <span className="weather-forecast-temperature-max">{maxTempetrature()}</span>
        <span className="weather-forecast-temperature-min">{minTempetrature()}</span>
       </div>
  </>
 )
}