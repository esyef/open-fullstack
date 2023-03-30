import { useState, useEffect } from "react"
import axios from 'axios'
import AddNewPerson from './components/AddNewPerson'
import Display from './components/Display'
import ListOfPersons from './components/ListOfPersons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ searchFilter, setSearchFilter ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((data) => setPersons(data.data))
  }, [])

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

  const handleSearchChange = (eve) => {
    setSearchFilter(eve.target.value)
  }

  const searchPerson = persons.filter(
    (person) => person.name.toLocaleLowerCase()
      .includes(searchFilter.toLocaleLowerCase()
      ))

  return (
    <>
      <Display
        searchFilter={ searchFilter }
        onChange={ handleSearchChange }
      />

      <AddNewPerson
        onSubmit={ addNewPerson }
        newName={ newName }
        number={ number }
        handleNameChange={ handleNameChange }
        handleNumberChange={ handleNumberChange }
      />


      <ListOfPersons
        searchPerson={ searchPerson }
      />

    </>
  )
}

export default App