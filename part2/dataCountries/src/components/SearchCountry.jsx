const SearchCountry = ({ onChange, value }) => {
  return (
    <header>
      <div>
        <label htmlFor='input'>
          Find countries
        </label>
      </div>

      <div>
        <input
          type='text'
          placeholder='Colombia'
          id='input'
          value={ value }
          onChange={ onChange }
        />
      </div>
    </header>
  )
}

export default SearchCountry