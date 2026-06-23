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

	const imgURL = `https://openweathermap.org/payload/api/media/file/${weather.icon}.png`

	return(
		<>
			<h2> weather in {info.capital[0]} </h2>
			<p> {weather.description} </p>
			<img src={imgURL} alt={weather.main} /> 
		</>
	)
}

export default Weather;
