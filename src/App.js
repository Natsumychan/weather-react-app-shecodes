import React from 'react';
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather/>
        <footer>
          <p>
          This project was coded by Diana Castaño, and is an <a href="https://github.com/Natsumychan/weather-react-app-shecodes" target="_blank">open source</a>
          </p>
        </footer>
      </div>
    </div>
  );
}



