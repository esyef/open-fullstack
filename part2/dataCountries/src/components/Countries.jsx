import CountryInfo from './CountryInfo'

const Mesagge = ({ text }) => <h1> { text } </h1>

const Countries = ({ countries }) => {

  if (countries.length === 0) return <Mesagge text='Nothing results 🤥 try again' />
  if (countries.length > 10) return <Mesagge text='To many matches, specify anothe filter' />

  const singleCountry = countries[ 0 ]

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