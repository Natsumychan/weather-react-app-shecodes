import React, {useState} from "react";
import axios from 'axios';
import {apiKey} from "./config";
import "./Weather.css"

export default function Weather (){
 const [ready, setReady] = useState(false)
 const [temperature, setTemperature] = useState(null);
 
 function handleResponse(response){
  console.log(response.data)
  setTemperature(response.data.temperature.current)
  setReady(true)
 }

 if(ready){
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
   <h1>New York</h1>
   <ul>
    <li>Wednesday 07:00</li>
    <li>Clear</li>
   </ul>
   <div className="row">
    <div className="col-6">
      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear"/>
      <span className="temperature">{temperature}</span>
      <span className="unit">°C</span>
    </div>
    <div className="col-6">
     <ul>
      <li>Precipitation: 15%</li>
      <li>Humidity:72%</li>
      <li>Wind:13 km/h</li>
     </ul>
    </div>
   </div>
  </div>
 )
 }else{
  let city="New York"
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
  return "Loading..."
 }
 
 
}