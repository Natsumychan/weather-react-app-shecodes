import React from "react";
import FormattedDate  from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"
// import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props){
 return <>
   <h1>{props.info.city}</h1>
   <ul>
    <li><FormattedDate date={props.info.date}/></li>
    <li className="text-capitalize">{props.info.description}</li>
   </ul>
   <div className="row">
    <div className="col-6">
      <WeatherIcon icon={props.info.icon} iconDescription={props.info.iconDescription} width="68" height="68"/>
      <WeatherTemperature celsius={props.info.temperature} unit={props.info.unit} city={props.info.city}/>
    </div>
    <div className="col-6">
     <ul>
      <li>Humidity:{props.info.humidity}%</li>
      <li>Wind:{props.info.wind} km/h</li>
     </ul>
    </div>
   </div>
   {/* <WeatherForecast city={props.info.city} unit={props.info.unit}/> */}
 </>
}