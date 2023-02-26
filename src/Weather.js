import React from "react";
import "./Weather.css"

export default function Weather (){
 return (
  <div className="weather">
   <form>
    <div className="row">
     <div className="col-8">
      <input type="search" placeholder="Enter a city..." className="form-control"/>
     </div>
     <div className="col-4">
      <input type="submit" value="Search" className="btn btn-primary"/>
     </div>
    </div>
   </form>
   <h1>New York</h1>
   <ul>
    <li>Wednesday 07:00</li>
    <li>Clear</li>
   </ul>
   <div className="row">
    <div className="col-6">
     <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="clear"/>
     6°C
    </div>
    <div className="col-6">
     <ul>
      <li>Precipitation: 15%</li>
      <li>Humidity:72%</li>
      <li>Wind:13 km/h</li>
     </ul>
    </div>
   </div>
  </div>
 )
}