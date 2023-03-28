import { useState } from "react"



// function Hello(props) {
//   const { name, age } = props
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// function Display([counter]) {
//   return (
//     <div>
//       {counter}
//     </div>
//   )
// }

// function Button({ text, handleClick }) {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// function App() {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <h1>Grettinds</h1>
//       <Hello name={"Yeferson"} age={25} />

//       <Display counter={counter} />

//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />

//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />

//       <Button
//         handleClick={setToZero}
//         text='zero'
//       />
//     </div>
//   )
// }

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing thr buttons
      </div>
    )
  }

  return (
    <div>
      Button press history: { allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left += 1
    })

    setAll(allClicks.concat('Left'))
  }

  const handleRightClick = () => {
    setClicks({
      ...clicks,
      right: clicks.right += 1
    })

    setAll(allClicks.concat('Right'))
  }

  return (
    <div>
      <div>
        {clicks.left}
        <Button
          text="Left"
          handleClick={handleLeftClick}
        />
      </div>

      <div>
        {clicks.right}
        <Button
          text="right"
          handleClick={handleRightClick}
        />
      </div>

      <p>{allClicks.join(' ')}</p>

      <div>
       <History allClicks={allClicks}/>
      </div>
    </div>
  )
}

export default App