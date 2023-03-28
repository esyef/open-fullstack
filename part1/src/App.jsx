function Hello(props) {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Grettinds</h1>
      <Hello  name={"Yeferson"} age={25}/>
    </div>
  )
}

export default App