const Part = ({ part }) => {
  const { name, exercises } = part
  return (
    <div>
      <p>{name} : <span>{exercises}</span></p>
    </div>
  )
}

export default Part