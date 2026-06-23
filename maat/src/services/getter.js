import axios from "axios"

const list = () => {
	return axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
		.catch((e)=>{
		console.log(`something went wrong with fetchng the country list`)
		console.error(e)
	})
}

const specific = (name) => {
	return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
		.catch((e) => {
		console.log(`something went wrong with fetching info for ${name}`)
		console.error(e)
	})
}

export default {list, specific}
