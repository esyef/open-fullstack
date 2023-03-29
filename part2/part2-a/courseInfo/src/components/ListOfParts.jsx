import Part from "./Part"

const ListOfPart = ({ parts }) => {
  return (
    <ul>
      {
        parts.map(({ id, ...part }) => (
          <Part
            key={id}
            part={part}
          />
        ))
      }
    </ul>
  )
}

export default ListOfPart