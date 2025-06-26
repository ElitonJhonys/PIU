import './FirsForm.css'
import { useState } from 'react'

export default function FormSelect(){

    const [select, setSelect] = useState('')
    const[name,setName] = useState('')
    const [listaselect, setListaSelect] = useState([])
    const [listaname, setListaName] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setListaSelect([...listaselect, select])
        setSelect('')
        setListaName([...listaname, name])
        setName('')
    }
        
    return(
        <div>
            <h1>ATV de 5 min</h1>
            <form onSubmit={handleSubmit}>
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
             <p>A selecao escolhida foi: {listaselect.map((item) =><text>{item} </text>)}</p>
             <p>A selecao escolhida foi: {listaname.map((item) =><text>{item} </text>)}</p>

        </div>
    )
}