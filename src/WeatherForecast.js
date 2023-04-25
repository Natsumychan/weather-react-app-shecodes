import React, {useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForescastDay";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
 let [loaded, setLoaded]= useState(false)
 let [forecast, setForecast]=useState(null)
 function handleResponse(response){
   console.log(response.data.daily)
    setForecast(response.data.daily);
    setLoaded(true);
   }
 if(loaded){
    return (
    <div className="weatherForecast">
     <div className="row">
      <div className="col">
       <WeatherForecastDay forecastData={forecast} />
      </div>
     </div>
    </div>
 )
 }else{
 
   let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=te60b41a5ebo3808074c9edaf83940fc&units=metric`
   axios.get(apiUrl).then(handleResponse)
   return null;
 }
}