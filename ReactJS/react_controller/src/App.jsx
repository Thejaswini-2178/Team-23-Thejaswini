import { useState } from 'react'
import './App.css'
// import Form from './Components/form'
import Form_2 from './Components/Form-2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      <Form_2/>
    </>
  )
}

export default App
