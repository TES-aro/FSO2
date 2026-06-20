import Entry from "./Entry.jsx";

const Entries = ({entries, setEntries}) => {
	const removeEntry = (id) => {
		const newEntries = entries.filter(entry => {
			return entry.id !== id
		})
		setEntries(newEntries)
	}
	return(
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Number</th>
			</tr>
			</thead>
			<tbody>
			{entries.map(entry => {
				return <Entry key={entry.name} entry={entry} delEntry={removeEntry} />
			})}
			</tbody>
		</table>
	)

}

export default Entries;
