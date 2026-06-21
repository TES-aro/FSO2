import { useState , useEffect} from 'react'
import Entries from "./components/Entries.jsx"
import Add from "./components/Add.jsx"
import Filter from "./components/Filter.jsx"
import Notification from "./components/Notification.jsx"
import {getAll} from './services/data.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({message:null, isError:false})

  const showNames = (filter === "")
  	? persons
  	: persons.filter(person => {
	  	return person.name.toLowerCase().includes(filter.toLowerCase());
  	})

  const notify = (message, isError) => {
	  const notification = {message: message, isError: isError};
	  setNotification(notification)
	  setTimeout(() => {
		  setNotification({message:null, isError:false})
	  }, 5000)
  }

	useEffect(() => {
		getAll().then(response => {
			setPersons(response.data)
			console.log(response)
		})
	}, [])


	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notification.message} isError={notification.isError} />
			<div>
				<Filter filter={filter} setFilter={setFilter} />
				<Add name={newName} number={newNumber} setName={setNewName}
					setNumber={setNewNumber} persons={persons} setPersons={setPersons}
					notify={notify} />
				<Entries entries={showNames} setEntries={setPersons} notify={notify}/>
			</div>
		</div>
	)
}

export default App
