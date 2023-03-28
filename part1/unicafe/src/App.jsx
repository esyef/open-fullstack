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

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statics = ({ feedback, count }) => {

  if (count === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const feedBackAverage = () => {
    let average = 0
    const totalScore = feedback.reduce((acc, currentValue) => acc + currentValue.score, 0)
    average = totalScore / feedback.length
    return average.toFixed(2)
  }

  const porcentageGood = () => {
    const totalScore = feedback.reduce((acc, currentValue) => acc + currentValue.score, 0)
    const totalGood = feedback.find(good => good.name === 'good').score
    return ((totalGood / totalScore) * 100).toFixed(2)
  }

  return (
    <footer>
      <table>
        <thead>
          <tr>
            <th colSpan={2}> Statics</th>
          </tr>
        </thead>
        <tbody>

          {feedback.map(el => (
            <tr key={el.name}>
              <td>{el.name} </td> <td> {el.score} </td>
            </tr>
          ))}

          <tr>
            <td>
              all
            </td>
            <td>
              {count}
            </td>
          </tr>

          <tr>
            <td>
              average
            </td>
            <td>
              {feedBackAverage()}
            </td>
          </tr>

          <tr>
            <td>
              positive
            </td>
            <td>
              {porcentageGood()} %
            </td>
          </tr>


        </tbody>

      </table>



    </footer>
  )
}


const App = () => {
  const [feedback, setFeedback] = useState([
    { name: 'good', score: 0 },
    { name: 'neutral', score: 0 },
    { name: 'bad', score: 0 },
  ])
  const [count, setCount] = useState(0)


  const incrementFeedBack = (type) => {
    setFeedback((prevFeddBack) => prevFeddBack.map(element => {
      if (element.name === type) {
        return { ...element, score: element.score + 1 }
      }
      return element
    }))

    setCount(count + 1)
  }

  return (
    <>
      <Display />
      <main>
        <Button text='Good' handleClick={() => incrementFeedBack('good')} />
        <Button text='Netural' handleClick={() => incrementFeedBack('neutral')} />
        <Button text='Bad' handleClick={() => incrementFeedBack('bad')} />
      </main>
      <Statics feedback={feedback} count={count} />
    </>
  )
}


export default App