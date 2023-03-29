const Display = ({ searchFilter, onChange }) => {
  return (
    <header>
      <h1>The phonebook</h1>

      <section>
        <div>
          <label htmlFor='search'>
            Filter shown with
          </label>
        </div>
        <div>
          <input
            type='text'
            name='search'
            id='search'
            value={ searchFilter }
            placeholder='Write a search term'
            onChange={ onChange }
          />
        </div>
      </section>
    </header>
  )
}

export default Display