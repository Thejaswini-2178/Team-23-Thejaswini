import { useState } from 'react'
import './App.css'
import CRUD_5 from './Componets/CRUD_5'
// import RegistrationForm4 from './Componets/CRUD_3'
// import Curd_aplication from './Componets/Curd_aplication'
// import RegistrationForm1 from './Componets/CRUD_2'
// import RegistrationForm3 from './Componets/CRUD_4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Curd_aplication/> */}
    {/* <RegistrationForm1/> */}
    {/* <RegistrationForm3/> */}
    {/* <RegistrationForm4/> */}
    <CRUD_5/>

    </>

  )
}

export default App
