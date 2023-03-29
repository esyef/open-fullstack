import Header from "./Header"
import ListOfPart from "./ListOfParts"
import Total from "./Total"


const Course = ({ courses }) => {

  return (
    <ul>
      {
        courses.map(({ id, name, parts }) => {
          const exercises = parts.map(exercise => exercise.exercises)
          const totalExercises = exercises.reduce((acc, curretValue) => acc + curretValue, 0)
          return (
            <li key={id}>
              <Header courseTitle={name} />
              <ListOfPart parts={parts} />
              <Total total={totalExercises} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default Course