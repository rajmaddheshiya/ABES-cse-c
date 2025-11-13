import "./weather.css"

function Weather(props){
  return(
    <div id="weather-card">
      <h2>Weather App</h2>
      <h3>City: {props.country}</h3>
      <h3>Temperature: {props.temperature}</h3>
    </div>
  )
}
export default Weather