import { useState } from "react"
import Note from "./components/Note"

const notesList = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const App = () => {
  const [notes, setNotes] = useState(notesList)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={ () => setShowAll(!showAll) }>
          Show { showAll ? 'Important' : 'All'  }
        </button>
      </div>

      <ul>
        {
          notesToShow.map(({ id, ...note }) => (
            <Note key={ id } note={ note } />
          ))
        }
      </ul>

      <form onSubmit={ addNote }>
        <input value={ newNote } onChange={ handleNoteChange } placeholder='Write your note' />
        <button>save</button>
      </form>
    </div>
  )
}

export default App