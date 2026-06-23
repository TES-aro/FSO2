import API from "../../services/api.js";
import {useState, useEffect} from 'react';
const Weather = ({info}) => {
	const [weather, setWeather] = useState(null)
	console.log("in weather")
	if (!info) {
		return (
			<>
			</>
		)
	}
	useEffect(() => {
		API(info.capitalInfo.latlng).then(response => {
			const data = response.data;
			setWeather(data);
			console.log(data);
		})
	},[info])

	if (!weather) {
		return(
			<>
			</>
		)
	}

	const imgURL = `https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`
	const temperature = (weather.main.temp - 274.15).toFixed(2)
	return(
		<>
			<h2> weather in {info.capital[0]} </h2>
			<p> {weather.weather[0].description} </p>
			<p> temperature: {temperature} </p>
			<img src={imgURL} alt={weather.weather[0].main} /> 
		</>
	)
}

export default Weather;
