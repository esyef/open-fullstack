const AddNewPerson = ({ onSubmit, newName, handleNameChange, number, handleNumberChange }) => {
  return (
    <section>
      <h1>
        Add a new
      </h1>

      <form onSubmit={ onSubmit }>
        <div>
          <label htmlFor="name">
            name:
          </label>
        </div>
        <div>
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
        </div>

        <div>
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
    </section>
  )
}

export default AddNewPerson