import { useState } from 'react'
import './App.css'
// import Form from './Components/form'
import Form_2 from './Components/Form-2'
import Form3 from './Components/Form3'
import Form4 from './Components/Form4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      {/* <Form_2/> */}
      {/* <Form3/> */}
      <Form4/>
    </>
  )
}

export default App
