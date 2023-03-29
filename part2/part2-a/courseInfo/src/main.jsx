import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.course}</h1>
//     </header>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.name} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <main>
//       {
//         props.parts.map(part => (
//           <Part key={part.name} name={part.name} exercises={part.exercises} />
//         ))
//       }
//     </main>
//   )
// }

// const Total = (props) => {
//   const totalExercises = props.exercises.reduce((acc, currentValue) => acc + currentValue, 0)
//   return (
//     <footer>
//      <p>Number of exercises {totalExercises}</p>
//     </footer>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
