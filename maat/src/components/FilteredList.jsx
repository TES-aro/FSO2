import { useEffect } from "react"

const FilteredList = ({filteredList, text, setShown}) => {

	// yää oli hassu asia, minkä olin unohtanut
	useEffect(() => {
	if (filteredList.length === 1){
		setShown(filteredList[0])
	}
	},[filteredList])

	if (text === null || text.length === 0){
		return (
			<>
			</>
		)
	}

	if (filteredList.length === 0){
		return(
			<p> no matches :(</p>
		)
	}

	if (filteredList.length <= 10 && filteredList.length > 1){
		const list = filteredList.map(item => {
			return(
				<li key={item} >
					{item}
					<button onClick={() => setShown(item)} > show </button>
				</li>
			)
		})
		console.log("less than 10")
		return(
			<ul>
				{list}
			</ul>
		)
	}
	if (filteredList.length > 10){
		return(
			<>
				<p> over 10 matches! </p>
			</>
		)
	}

	else {
		console.log("filteredList.length: " , filteredList.length)
		return(
			<>
			</>
		)
	}
}

export default FilteredList;
