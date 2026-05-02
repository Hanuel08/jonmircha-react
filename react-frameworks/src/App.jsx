
import './App.css'
import { Bootstrap } from './components/Bootstrap.jsx'
import { Bulma } from './components/Bulma.jsx'
import { ReactBootstrap } from './components/ReactBootstrap.jsx'
import { MaterialUI } from './components/MaterialUI.jsx'

function App() {

  return (
    <>
      <div>
        <h1>Frameworks CSS con React</h1>
        <Bootstrap />
        <Bulma />
        <ReactBootstrap />
        <MaterialUI />
      </div>
    </>
  )
}

export default App
