import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForescastDay";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
 let [loaded, setLoaded]= useState(false)
 let [forecast, setForecast]=useState(null)

 useEffect(()=>{
  setLoaded(false);
 },[props.city])

 function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
   }
 if(loaded){
    return (
    <div className="weatherForecast">
     <div className="row">
      {forecast.map((dailyForecast,index)=>{
        if(index<5){
          return( 
            <div className="col" key={index}>
              <WeatherForecastDay forecastData={dailyForecast} />
            </div>
        )
        }else{
          return null;
        }
      })}
     
     </div>
    </div>
 )
 }else{
 
   let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=te60b41a5ebo3808074c9edaf83940fc&units=metric`
   axios.get(apiUrl).then(handleResponse)
   return null;
 }
}