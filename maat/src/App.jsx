import { useState, useEffect } from 'react'
import getter from './services/getter.js';

function App() {
	const [countries, setCountries] = useState()

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
		</div>
	)
}

export default App
