import Cotent from './Content.jsx'

const Courses = ({courses}) => {
	return (
		<>
		{courses.map((course) => {
			return <Cotent key={course.id} course={course} />
		})}
		</>
	)
}

export default Courses;
