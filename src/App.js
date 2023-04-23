import React from 'react';
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          <p>
          This project was coded by <a href="https://www.linkedin.com/in/diana-casta%C3%B1o-zapata-aba84284/" target="_blank" rel="noopener noreferrer">Diana Castaño</a>, and is an <a href="https://github.com/Natsumychan/weather-react-app-shecodes" target="_blank" rel="noopener noreferrer">open source on Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}



