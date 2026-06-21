import {del} from "../services/data.js"

const Entry = ({entry, delEntry, notify}) => {
	const handlePress = () => {
		if (confirm(`delete ${entry.name}'s entry?`)){
			del(entry.id).then(() => {
				delEntry(entry.id);
				notify(`deleted ${entry.name}'s entry`, false);
				}).catch((error) => {
				console.log(error);
				notify(`issue with deleting ${entry.name}`, true);
			})
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
