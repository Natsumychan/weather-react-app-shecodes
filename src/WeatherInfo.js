import React from "react";
import FormattedDate  from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo(props){
 return <>
   <h1>{props.info.city}</h1>
   <ul>
    <li><FormattedDate date={props.info.date}/></li>
    <li className="text-capitalize">{props.info.description}</li>
   </ul>
   <div className="row">
    <div className="col-6">
      <WeatherIcon icon={props.info.icon} iconDescription={props.info.iconDescription}/>
      <WeatherTemperature celsius={props.info.temperature}/>
    </div>
    <div className="col-6">
     <ul>
      <li>Humidity:{props.info.humidity}%</li>
      <li>Wind:{props.info.wind} km/h</li>
     </ul>
    </div>
   </div>
 </>
}