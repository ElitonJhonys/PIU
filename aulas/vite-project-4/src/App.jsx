
import './App.css'
import FirstForm from './componentes/FirstForm'
import FormState from './componentes/FormState'
import FormSelect from './componentes/FormSelect'
import Form from './componentes/Form'
import ListaDeTarefas from './componentes/ListaDeTarefas'

function App() {
 

  return (
  <div className="App">
    <h1>Trabalhando com Formulários</h1>
      <FirstForm/>
      <br />
      <FormState/>
      <br />
      <FormSelect/>
      <br />
      <hr />
        <Form/>
      <hr />
      <ListaDeTarefas />
  </div>
  )
}

export default App