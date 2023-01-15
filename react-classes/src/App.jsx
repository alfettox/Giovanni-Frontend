import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Container from './assets/Container.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container
        type="Blablatero"
        id="1" />
      
    </div>
  )
}

export default App
