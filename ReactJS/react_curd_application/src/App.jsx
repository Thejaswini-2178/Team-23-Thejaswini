import { useState } from 'react'
import './App.css'
import Curd_aplication from './Componets/Curd_aplication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Curd_aplication/>
    </>
  )
}

export default App
