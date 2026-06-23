import axios from "axios"
const key = import.meta.env.VITE_WEATHER_KEY;

const weather = (latlong) => {
	console.log(`api key: ${key}`)
	const call = `https://api.openweathermap.org/data/2.5/
	weather?lat=${latlong[0]}&lon=${latlong[1]}&appid=${key}`
	return axios.get(call)
		.catch((e) => {
		console.log(`something went wrong with fetching weather info`)
		console.error(e)
	})
}

export default weather;
