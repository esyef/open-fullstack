import { useState } from "react"



function Hello(props) {
  const { name, age } = props
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

function Display([counter]) {
  return (
    <div>
      {counter}
    </div>
  )
}

function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

function App() {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <h1>Grettinds</h1>
      <Hello name={"Yeferson"} age={25} />

      <Display counter={counter} />

      <Button
        handleClick={increaseByOne}
        text='plus'
      />

      <Button
        handleClick={decreaseByOne}
        text='minus'
      />

      <Button
        handleClick={setToZero}
        text='zero'
      />
    </div>
  )
}

export default App