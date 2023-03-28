import { useState } from "react"

const Display = () => {
  return (
    <header>
      <h1>
        Give feedback
      </h1>
    </header>
  )
}

const Button = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

const Statics = () => {
  return (
    <footer>
      <h2>
        Statics
      </h2>
    </footer>
  )
}


const App = () => {
  const [feedback, setFeedback] = useState([
    { name: 'good', score: 0 },
    { name: 'neutral', score: 0 },
    { name: 'bad', score: 0 },
  ])


  return (
    <>
      <Display />
      <main>
        <Button text='Good' />
        <Button text='Netural' />
        <Button text='Bad' />
      </main>
      <Statics />
    </>
  )
}


export default App