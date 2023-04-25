import React, {useState} from "react";
import WeatherForecast from "./WeatherForecast";

export default function WeatherTemperature(props){
  let city=props.city
  let [measure, setMeasure]= useState("metric")
 const[unit, setUnit]= useState("celsius")
 function convertToFarenheit(event){
  event.preventDefault();
  setUnit("fahrenheit")
  setMeasure("imperial")
 }

 function convertToCelsius(event){
  event.preventDefault();
  setUnit("celsius")
  setMeasure("metric")
 }

 function farenheit(){
  return Math.round((props.celsius * 9/5) +32);
 }

 if(unit ==="celsius"){
   return(
   <>
    <span className="temperature">{props.celsius}</span>
    <span className="unit">°C</span>
    <span className="separator">|</span>
    <a href="/"className="unit-to-select" onClick={convertToFarenheit}>°F</a>
    <WeatherForecast city={city} unit={measure}/>
   </>) 
 }else{
  return (
   <>
    <span className="temperature">{farenheit()}</span>
    <a href="/"className="unit-to-select" onClick={convertToCelsius}>°C</a>
    <span className="separator">|</span>
    <span className="unit">°F</span>
    <WeatherForecast city={city} unit={measure}/>
   </>)
 }
}


