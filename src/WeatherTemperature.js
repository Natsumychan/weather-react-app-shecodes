import React, {useState} from "react";

export default function WeatherTemperature(props){
 const[unit, setUnit]= useState("celsius")
 function convertToFarenheit(event){
  event.preventDefault();
  setUnit("fahrenheit")
 }

 function convertToCelsius(event){
  event.preventDefault();
  setUnit("celsius")
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
    <a href="/"className="unit" onClick={convertToFarenheit}>°F</a>
   </>)
   
 }else{
  
  return (
   <>
    <span className="temperature">{farenheit()}</span>
    <a href="/"className="unit" onClick={convertToCelsius}>°C</a>
    <span className="separator">|</span>
    <span className="unit">°F</span>
   </>)
 }
}


