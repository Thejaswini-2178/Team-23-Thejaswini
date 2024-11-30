import { useState } from 'react'
import './App.css'
import Ifelse from './Conditionalrendering/Ifelse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ifelse/>       
    </>
  )
}

export default App
