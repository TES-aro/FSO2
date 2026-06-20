const Filter = ({filter, setFilter}) => {
	return(
		<>
			<label>
			 filter: <input onChange={e =>{setFilter(e.target.value)}} value={filter} />
			</label>
		</>
	)
}

export default Filter;
