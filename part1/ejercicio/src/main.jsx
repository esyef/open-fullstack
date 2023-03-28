import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <main>
      {
        props.parts.map(part => (
          <Part key={part.name} name={part.name} exercises={part.exercises} />
        ))
      }
    </main>
  )
}

const Total = (props) => {
  const totalExercises = props.exercises.reduce((acc, currentValue) => acc + currentValue, 0)
  return (
    <footer>
     <p>Number of exercises {totalExercises}</p>
    </footer>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const exercises = parts.map(part => part.exercises)

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      />

      <Total
        exercises={exercises}
      />

    </div>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
