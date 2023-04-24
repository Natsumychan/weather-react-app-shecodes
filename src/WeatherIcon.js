import React from "react";

export default function WeatherIcon (props){
 return(
   <img src={props.icon} alt={props.iconDescription} width={props.width} height={props.height}/>
 )
} 