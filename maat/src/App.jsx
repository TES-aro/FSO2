import { useState, useEffect } from 'react'
import getter from './services/getter.js';
import Filter from './components/Filter.jsx';
import Info from "./components/Info.jsx";

function App() {
	const [countries, setCountries] = useState([])
	const [show, setShow] = useState("")

	useEffect(() => {
		getter.list().then((response) => {
			const data = response.data;
			const names = data.map(country => {
				return country.name
			})
			setCountries(names)
		})
	}, [])

	return (
		<div>
			<div>
				<Filter list={countries} setShown={setShow} />
			</div>
			<div>
				<Info name={show} />
			</div>
		</div>
	)
}

export default App
