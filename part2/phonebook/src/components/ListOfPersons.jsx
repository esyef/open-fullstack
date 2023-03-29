const ListOfPersons = ({ searchPerson }) => {

  return (
    <section>
      <h1>
        Numbers
      </h1>
      {
        searchPerson.length === 0 ? (
          <p>
            This search not having any results
          </p>
        ) :
          (
            <ul>
              {
                searchPerson.map((person) => (
                  <li key={ person.name }>
                    <p> { person.name } : <span> { person.number } </span> </p>
                  </li>
                ))
              }
            </ul>
          )
      }

    </section>
  )
}

export default ListOfPersons