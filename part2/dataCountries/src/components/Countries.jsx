import { useState } from 'react'
import CountryInfo from './CountryInfo'

const Mesagge = ({ text }) => <h1> { text } </h1>

const Countries = ({ countries }) => {
  const [ show, setShow ] = useState(false)
  const [ selectedCountry, setCountrySelected ] = useState('')

  if (countries.length === 0) return <Mesagge text='Nothing results 😶 try again' />
  if (countries.length > 10) return <Mesagge text='To many matches, specify anothe filter' />

  const singleCountry = countries[ 0 ]

  const handleShowClick = (name) => {
    setShow(true)
    setCountrySelected(name)
  }

  const filterCountry = countries?.filter(country => country.name.common === selectedCountry)

  if (show) {
    return (
      <div>
        <button onClick={ () => setShow(false) }>
          Back
        </button>
        <CountryInfo
          country={ filterCountry[ 0 ] }
        />
        {
          filterCountry.length === 0 && <Mesagge text='Nothing results 😶 try again' />
        }
      </div>
    )
  }

  return (
    <main>
      <ul>
        {
          countries?.length === 1 ? (
            <CountryInfo
              country={ singleCountry }
            />
          ) : (
            countries?.map(({ area, fifa, name }) => {
              const { common } = name
              const key = String(area) + fifa
              return (
                <li key={ key }>
                  { common }
                  <button onClick={ () => handleShowClick(common) } country={ common }>
                    Show
                  </button>
                </li>
              )
            })
          )
        }
      </ul>
    </main>
  )
}

export default Countries
