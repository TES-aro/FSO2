const Languages = ({info}) => {
	const keys = Object.keys(info.languages);
	const languages = keys.map(key => {
		return (
			<li key={key}> {info.languages[key]} </li>
		)
	})
	return (
		<>
		<h3> Languages: </h3>
		<ul>
			{languages}
		</ul>
		</>
	)
}

export default Languages;
