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

const VoteAnecdote = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      vote
    </button>
  )
}

const CurrentAnecdote = ({ anecdote }) => {
  return (
    <header>
      <h1>Anecdote of the day</h1>

      <p>
        {anecdote}
      </p>
    </header>
  )
}

const WithMostVotes = ({ anecdote, votes }) => {

  return (
    <div>
      <h1>Anecdote  with most votes</h1>
      <p>
        {anecdote} </p>
      <p>
        has {votes} votes
      </p>
    </div>
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

  const withMostVotesIndex = votes.indexOf(Math.max(...votes))
  const anecdoteWithMostVotes = anecdotes[withMostVotesIndex]
  const highestNumberOfVotes = votes[withMostVotesIndex]

  return (
    <div>
      <CurrentAnecdote
        anecdote={anecdotes[selected]}
      />

      <div>
        <>
          <h3>
            {votes[selected]}
          </h3>
          <VoteAnecdote handleClick={() => addVote(selected)} />
        </>

        <Button text='Get new anecdote' handleClick={generateRandonNumber} />
      </div>

    
        <WithMostVotes
          anecdote={anecdoteWithMostVotes} 
          votes={highestNumberOfVotes}
        />
  
    </div>
  )
}

export default App