import React from "react";

export default function FormattedDate(props){
 const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 let day= days[props.date.getDay()];
 let hours=props.date.getHours();
 let minutes= props.date.getMinutes();
 const updatedHours= hours < 10 ? `0${hours}` : hours;
 const updatedMinutes= minutes < 10 ? `0${minutes}` : minutes;

 return <div>Last updated on {day} at {updatedHours}:{updatedMinutes} </div>
}