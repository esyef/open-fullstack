const CountryInfo = (props) => {
  const { name: { common }, capital, languages, flags: { png, alt }, population } = props.country
  const listLanguages = Object.values(languages)

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
    </section>
  )
}

export default CountryInfo