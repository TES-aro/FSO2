import {useState} from "react";
import FilteredList from "./FilteredList.jsx"
/*
const filter = ({list, setFiltered, text}) => {
	const filteredList = []
	list.forEach(country => {
		if (country.common.includes(text)){
			filteredList = filteredList.concat(country.common);
			return
		}
		if (country.official.includes(text)){
			filteredList = filteredList.concat(country.official);
			return
		}
	})
	setFiltered(filteredList = [])
}
*/
const Filter = ({list,  setShown}) => {
	const [text, setText] = useState("");
	const [filtered, setFiltered] = useState([])
	const handle = (e) => {
		setText(e.target.value)
		let newFiltered = []
		list.forEach( (item) => {
			if (item.common.toLowerCase().includes(text.toLowerCase())){
				newFiltered = newFiltered.concat(item.common);
				return
			}
			if (item.official.toLowerCase().includes(text.toLowerCase())){
				newFiltered = newFiltered.concat(item.official);
				return
			}
		})
		setFiltered(newFiltered)
	}
	return (
		<div>
			<label>
				Filter:	<input name="filter" value={text} onChange={handle} />
			</label>
			<FilteredList filteredList={filtered} text={text} setShown={setShown} /> 
		</div>
	)
}

export default Filter
