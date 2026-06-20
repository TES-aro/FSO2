import axios from "axios";
const baseURL = "http://localhost:3001/persons"

export const getAll = () => {
	return axios.get(baseURL)
}

export const create = (name, number) => {
	console.log("creating")
	return axios.post(baseURL, {name:name, number:number})
}

export const update = (name, number, id) => {
	console.log("updating")
	return axios.put(`${baseURL}/${id}`, {name:name, number:number, id:id})
}

export const del = (id) => {
	return axios.delete(`${baseURL}/${id}`)
}

