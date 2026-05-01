import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { ContadorHooks } from "./components/ContadorHooks.jsx"
import { ScrollHooks } from "./components/ScrollHooks.jsx"
import { RelojHooks } from "./components/RelojHooks.jsx"
import { AjaxHooks } from "./components/AjaxHooks.jsx"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ContadorHooks />
        <br />
        <hr />
        <ScrollHooks />
        <br />
        <hr />
        <RelojHooks />
        <br />
        <hr />
        <AjaxHooks />
      </div>
    </>
  )
}

export default App
