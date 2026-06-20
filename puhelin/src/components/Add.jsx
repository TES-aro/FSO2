import {create, update} from '../services/data.js'
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

		const existing = persons.find(person => {
			return person.name.toLowerCase() === name.toLowerCase()
		})
		if (existing){
			//console.log(`existing: ${existing}`)
			update(name, number, existing.id).then(response => {
				const updatedPerson = response.data;
				//console.log(`updatedPerson: ${updatedPerson}`)
				const newPersons = persons.map(person => {
					if (person.id != existing.id) {
						return person;
					} else {
						return updatedPerson;
					}
				})
				setPersons(newPersons);
			})
		}	else {
			//console.log("shouldn't be here!")
			create(name, number).then(response => {
				const data = response.data
				const newPerson = {name: data.name, number: data.number, id: data.id};
				const newPersons = persons.concat(newPerson);
				setPersons(newPersons);
			})
		}
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
				number:	<input type="tel" value={number} onChange={numberChange} />
			</label>
			<br/>
			<button type="sybmit">submit</button>
		</form>
	)
}

export default Add;
