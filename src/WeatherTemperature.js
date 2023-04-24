import React, {useState} from "react";

export default function WeatherTemperature(props){
 const[unit, setUnit]= useState("celsius")
 return(<>
  <span className="temperature">{props.celsius}</span>
  <span className="unit">°C</span>
 </>)
}


