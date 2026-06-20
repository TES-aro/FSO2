const Add = ({name, setName, number, setNumber, persons, setPersons}) => {
	const nameChange = (e) => {
		setName(e.target.value)
	}
	const numberChange = (e) => {
		setNumber(e.target.value)
	}
	const addPerson = (e) => {
		e.preventDefault();
		console.log("button pressed:", e.target)
		if (persons.map(p => {return p.name}).includes(name)){
				console.log("matches existing");
				setName("");
				setNumber("");
				return
		}
		const newPerson = {name: name, number: number};
		const newPersons = persons.concat(newPerson);
		setPersons(newPersons);
		setName("");
		setNumber("");
	}
	return (
		<form onSubmit={addPerson}>
			<label>
				name: <input type="text" value={name} onChange={nameChange}/>
			</label>
			<br/>
			<label>
				number:	<input type="number" value={number} onChange={numberChange} />
			</label>
			<br/>
			<button type="sybmit">submit</button>
		</form>
	)
}

export default Add;
