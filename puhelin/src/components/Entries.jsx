import Entry from "./Entry.jsx";

const Entries = ({entries}) => {
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
				return <Entry key={entry.name} entry={entry} />
			})}
			</tbody>
		</table>
	)

}

export default Entries;
