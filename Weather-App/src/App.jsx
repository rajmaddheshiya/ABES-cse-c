import "./components/weather.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather.jsx";

function App() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=4d2aa98fff74412e94645335251311 &q=London"
    )
      .then((res) => res.json())
    .then(data=>setWeather(data))
  },[]);
  return(
       {
      weather.map((b,i)=>(
        <Weather key={i} country={b.name} temperature={b.main.temp} />))
      }
  )
}
export default App;
