const Entry = ({entry}) => {
	return(
		<>
			<tr>
				<td> {entry.name} </td>
				<td> {entry.number} </td>
			</tr>
		</>
	)
}

export default Entry;
