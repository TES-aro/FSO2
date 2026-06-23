import getter from "../services/getter.js";
import Languages from "./info/Languages.jsx"
import Flag from "./info/Flag.jsx"
import Weather from "./info/Weather.jsx"
import {useEffect, useState} from "react";

const Info = ({name}) => {
	const [info, setInfo] = useState(null);
	useEffect( () => {
		if (!name){
			return
		}
		getter.specific(name.toLowerCase()).then(response => {
			setInfo(response.data);
		})
	}, [name]);

	if (!info) {
		return (
			<>
			</>
		)
	}

	console.log("area:", info.area)

	return(
		<>
			<h2> {info.name.common} </h2>
			<h3> {info.name.official} </h3>
			<p> Capital: {info.capital[0]} </p>
			<p> Area: {info.area} </p>
			<Languages info={info} />
			<Flag info={info} />
			<Weather info={info} />
		</>
	)
}

export default Info;
