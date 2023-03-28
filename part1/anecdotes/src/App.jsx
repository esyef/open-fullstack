import { useState } from "react"

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const VoteAnecdote = ({handleClick}) => {
  return (
    <button onClick={handleClick}>
      vote
    </button>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const generateRandonNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = (index) => {
    setVotes(votes.map((vote, i) => i === index ? vote + 1 : vote))
  }

  return (
    <div>
      {
        anecdotes[selected]
      }
      <div>
        <>
          <p>
            {votes[selected]}
          </p>
          <VoteAnecdote handleClick={() => addVote(selected)}/>
        </>

        <Button text='Get new anecdote' handleClick={generateRandonNumber} />
      </div>
    </div>
  )
}

export default App