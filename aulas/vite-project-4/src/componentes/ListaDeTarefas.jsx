import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLista([...lista, tarefa])
        setTarefa('')

    }

    return(

        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <label>Selecione sua opção:
                    <select name="tarefa" onChange={(e) => setTarefa(e.target.value)} >
                        <option value="aluno">---</option>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="servidor">Servidor</option>
                        <option value="diretor">Diretor</option>
                    </select>
                </label>
                    <input type="submit" value="Adicionar" />

            </form>

            <ul>
                {lista.map((item) =>
                <li>{item}</li>
            )}
            </ul>

        </div>

    )
}