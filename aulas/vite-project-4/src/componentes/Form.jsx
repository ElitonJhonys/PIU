import './FirsForm.css'
import { useState } from 'react'

export default function FormSelect(){

    const [select, setSelect] = useState('')
    const[name,setName] = useState('')

    return(
        <div>
            <h1>ATV de 5 min</h1>
            <form>
                <h2>Form</h2>
                <label>Selecione sua opção:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="aluno">---</option>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="servidor">Servidor</option>
                        <option value="diretor">Diretor</option>
                    </select>
                </label>

                <label>
                        <span>Nome:</span>
                        {/* comentar em sala o atributo value */}
                        <input type="text" name="nome" onChange={(e) => setName(e.target.value)} value={name} placeholder='Digite seu nome:' />
                    </label>

                <input type="submit" value="Enviar" />
                
                

            </form>
            <p>A selecao escolhida foi: {select}</p>
            <p>O nome escolhido foi: {name}</p>

        </div>
    )
}