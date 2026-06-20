import Part from "./Part";

const Content = ({course}) => {
	// anti-pattern mutta eeeeeeh
	return(
		<>
			<h1> {course.name} </h1>
			<ul>
				{course.parts.map(part => {
					return <Part key={part.id} part={part} />
				})}
			</ul>
			<p style={{fontWeight: "bold"}} > total of {course.parts.reduce((total, current) => {
				return total + current.exercises;
			}, 0 )} exercises
			</p>
		</>
	)
}

export default Content;
