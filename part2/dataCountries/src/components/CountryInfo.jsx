import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = (props) => {
  const [ capitalInfo ] = useState(props.country.capital[ 0 ])
  const [ weatherReport, setWeatherReport ] = useState({})

  const { name: { common }, capital, languages, flags: { png, alt }, population } = props.country
  const listLanguages = Object.values(languages)

  const API_KEY = import.meta.env.VITE_WEATHER_STACK_API_KEY
  const URL_BASE = `http://api.weatherstack.com/current?access_key=${ API_KEY }&query=${ capitalInfo }`

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL_BASE)
      setWeatherReport(response.data.current)
    }
    fetchData()
  }, [ capitalInfo ])

  return (
    <section>
      <h1> { common } </h1>
      <p>
        Capital : <strong> { capital[ 0 ] } </strong>
      </p>
      <p>
        population: <strong>{ population } </strong>
      </p>

      <h1>
        <strong>
          Languages
        </strong>
      </h1>
      <ul>
        {
          listLanguages.map(lan => (
            <li key={ lan }>
              <strong> { lan } </strong>
            </li>
          ))
        }
      </ul>

      <img src={ png } alt={ alt } />

      <article>
        <p><strong>temperature: </strong> <span>{ weatherReport.temperature } celcius</span></p>
        <img src={ weatherReport.weather_icons } alt='Weather icons' />
        <p><strong>wind: </strong> <span>{ weatherReport.wind_speed } mph</span> <span>direction: { weatherReport.wind_dir }</span></p>
      </article>
    </section>
  )
}

export default CountryInfo