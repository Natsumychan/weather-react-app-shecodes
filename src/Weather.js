import React, {useState} from "react";
import axios from 'axios';
import {apiKey} from "./config";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather (props){
 const [city, setCity]=useState(props.defaultCity)
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
    city: city
  });
 }

 function search(){
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse)
 }

 function handleSubmit(event){
  event.preventDefault();
  search()
 }

 function handleCityChange(event){
  setCity(event.target.value)
 }

 if(weatherData.ready){
  return (
  <div className="weather">
   <form onSubmit={handleSubmit}>
    <div className="row">
     <div className="col-8">
      <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
     </div>
     <div className="col-4">
      <input type="submit" value="Search" className="btn btn-primary w-80"/>
     </div>
    </div>
   </form>
   <WeatherInfo info={weatherData}/>
  </div>
 )
 }else{
  search();
  return "Loading..."
 }
 
 
}