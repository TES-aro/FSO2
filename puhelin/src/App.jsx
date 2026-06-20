import { useState } from 'react'
import Entries from "./components/Entries.jsx"
import Add from "./components/Add.jsx"
import Filter from "./components/Filter.jsx"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "050 122345"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const showNames = (filter === "")
  	? persons
  	: persons.filter(person => {
	  	return person.name.toLowerCase().includes(filter.toLowerCase());
  	})




	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} setFilter={setFilter} />
			<Add name={newName} number={newNumber} setName={setNewName}
				setNumber={setNewNumber} persons={persons} setPersons={setPersons} />
			<Entries entries={showNames} />
		</div>
	)
}

export default App
