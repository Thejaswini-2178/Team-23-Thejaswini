import { useState } from 'react'
import './App.css'
import Ifelse from './Conditionalrendering/Ifelse'
import Logical from './Conditionalrendering/Logical'
import Ifwithlogic from './Conditionalrendering/Ifwithlogic'
import Switch from './Conditionalrendering/Switch'
import RenderCondition from './Conditionalrendering/RenderCondition'
import RenderingComponents from './Conditionalrendering/RenderingComponents'
import ConditionalRendering from './Conditionalrendering/ConditionalRendering'
import Rendering from './Conditionalrendering/Rendering'
import Renderingnull from './Conditionalrendering/Renderingnull'
import { NulltoRendering } from './Conditionalrendering/Nullto Rendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ifelse/> 
    <Logical/>
    <Ifwithlogic/>
    <Switch/>
    <RenderCondition/>
    <RenderingComponents/>
    <ConditionalRendering/>
    <Array/>
    <Rendering/>
    <Renderingnull/>
    <NulltoRendering/>
    </>
  )
}

export default App
