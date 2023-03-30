import { useState, useEffect } from 'react'
import SearchCountry from './components/SearchCountry'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(({ data }) => setCountries(data))
  }, [])

  const handleSearchChange = (eve) => {
    setSearchCountry(eve.target.value)
  }

  const filterCounties = countries.filter(({ name }) => {
    const { common } = name
    return common.toLocaleLowerCase().includes(searchCountry.toLocaleLowerCase())
  })

  return (
    <div>
      <SearchCountry
        onChange={ handleSearchChange }
        value={ searchCountry }
      />

      {
        searchCountry.length > 0 && (
          <Countries
            countries={ filterCounties }
            handleSearchChange={ handleSearchChange }
          />
        )
      }

    </div>
  )
}

export default App