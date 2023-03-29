import { useState } from "react"

const App = () => {
  const [ persons, setPersons ] = useState([ {
    name: 'Arto Hellas',
    number: '333-444-1234'
  } ])
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')

  const addNewPerson = (eve) => {
    eve.preventDefault()

    if (newName.trim().length < 3) return alert(`Name not must be empty or less than 3 character`)

    const isNameExist = persons.map((person) => person.name).includes(newName)

    if (isNameExist) {
      return alert(`${ newName } is already added to phonebook`)
    }

    const newPerson = {
      name: newName,
      number: number
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNumber('')
  }

  const handleNameChange = (eve) => {
    setNewName(eve.target.value)
  }

  const handleNumberChange = (eve) => {
    const inputPhoneNumber = eve.target.value

    // Regex: allow number phone start whith a number, and accept dashes and whitespace
    const phoneNumberRegex = /^(?!-)[0-9- ]*$/

    if (phoneNumberRegex.test(inputPhoneNumber)) {
      setNumber(inputPhoneNumber)
    }
  }

  return (
    <div>
      <h1>
        Phonebook
      </h1>
      <form onSubmit={ addNewPerson }>
        <div>
          <label htmlFor="name">
            name:
          </label>
          <input
            type="text"
            name="name"
            id='name'
            placeholder="Jhon Doe"
            value={ newName }
            onChange={ handleNameChange }
            required
          />
        </div>
        <div>
          <label htmlFor="phone">
            number:
          </label>
          <input
            type='text'
            placeholder='999-452-112-123'
            name='phone'
            id='phone'
            onChange={ handleNumberChange }
            value={ number }
            required
          />
        </div>
        <div>
          <button type='submit'>
            add
          </button>
        </div>
      </form>

      <h2>
        Numbers
      </h2>
      <ul>

        {
          persons.map((person) => (
            <li key={ person.name }>
              <p> { person.name } : <span> { person.number } </span> </p>
            </li>
          ))
        }

      </ul>

    </div>
  )
}

export default App