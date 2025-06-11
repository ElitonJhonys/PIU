import './App.css'
import Children from './componentes/Children'
import Info1V from './componentes/Info1V'
import Props from './componentes/Props'

function App() {

  return (
    <>
      <Props nome={2} newname={"ethythheygd"}/>
      <Props nome={5} newname={"jhsfba"}/>
      <Children>
        <Info1V/>
      </Children>
    </>
  )
}

export default App
