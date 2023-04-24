import React from "react";
import FormattedDate  from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
 return <>
   <h1>{props.info.city}</h1>
   <ul>
    <li><FormattedDate date={props.info.date}/></li>
    <li className="text-capitalize">{props.info.description}</li>
   </ul>
   <div className="row">
    <div className="col-6">
      <img src={props.info.icon} alt="clear"/>
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