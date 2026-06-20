import {del} from "../services/data.js"

const Entry = ({entry, delEntry}) => {
	const handlePress = () => {
		if (confirm(`delete ${entry.name}'s entry?`)){
			del(entry.id).then(delEntry(entry.id))
		}
	}
	return(
		<>
			<tr>
				<td> {entry.name} </td>
				<td> {entry.number} </td>
				<td>
					<button onClick={handlePress}> delete </button>
				</td>
			</tr>
		</>
	)
}

export default Entry;
