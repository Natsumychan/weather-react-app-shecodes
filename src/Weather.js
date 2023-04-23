import React, {useState} from "react";
import axios from 'axios';
import {apiKey} from "./config";
import FormattedDate  from "./FormattedDate";
import "./Weather.css";

export default function Weather (props){
 
 const [weatherData, setWeatherData] = useState({ready:false});
 
 function handleResponse(response){
  console.log(response.data)
  setWeatherData({
    ready:true,
    date: new Date(response.data.time * 1000),
    temperature: Math.round(response.data.temperature.current),
    description:response.data.condition.description,
    icon:response.data.condition.icon_url,
    iconDescription:response.data.condition.icon,
    humidity:response.data.temperature.humidity,
    wind:response.data.wind.speed,
    city: props.defaultCity
  });

 }

 if(weatherData.ready){
  return (
  <div className="weather">
   <form>
    <div className="row">
     <div className="col-8">
      <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
     </div>
     <div className="col-4">
      <input type="submit" value="Search" className="btn btn-primary w-80"/>
     </div>
    </div>
   </form>
   <h1>{weatherData.city}</h1>
   <ul>
    <li><FormattedDate date={weatherData.date}/></li>
    <li className="text-capitalize">{weatherData.description}</li>
   </ul>
   <div className="row">
    <div className="col-6">
      <img src={weatherData.icon} alt="clear"/>
      <span className="temperature">{weatherData.temperature}</span>
      <span className="unit">°C</span>
    </div>
    <div className="col-6">
     <ul>
      <li>Humidity:{weatherData.humidity}%</li>
      <li>Wind:{weatherData.wind} km/h</li>
     </ul>
    </div>
   </div>
  </div>
 )
 }else{
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
  return "Loading..."
 }
 
 
}