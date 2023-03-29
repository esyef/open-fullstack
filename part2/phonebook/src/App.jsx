import { useState } from "react"

const App = () => {
  const [ persons, setPersons ] = useState([ {
    name: 'Arto Hellas'
  } ])
  const [ newName, setNewName ] = useState('')

  const addName = (eve) => {
    eve.preventDefault()
    if (newName.trim().length <= 3) return
    const isNameExist = persons.map((person) => person.name).includes(newName)
    if (isNameExist) {
      alert(` ${ newName } is already added to phonebook`)
    }
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (eve) => {
    setNewName(eve.target.value)
  }

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form onSubmit={ addName }>
        <div>
          <label htmlFor="name">
            name:
          </label>
          <input
            type="text"
            name="name"
            id='name'
            placeholder="Write a new name"
            value={ newName }
            onChange={ handleNameChange }
          />
        </div>
      </form>

      <h2>
        Numbers
      </h2>
      <ul>

        {
          persons.map((person) => (
            <li key={ person.name }>
              { person.name }
            </li>
          ))
        }

      </ul>

    </div>
  )
}

export default App