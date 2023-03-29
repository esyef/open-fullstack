import Header from "./Header"
import ListOfPart from "./ListOfParts"


const Course = ({ course }) => {
  const { id, name, parts } = course
  return (
    <div>
      <Header courseTitle={course.name} />
      <ListOfPart parts={parts}/>
    </div>
  )
}

export default Course