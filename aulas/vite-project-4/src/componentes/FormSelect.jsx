import './FirsForm.css'
import { useState } from 'react'

export default function FormSelect(){

    const [select, setSelect] = useState()

    return(
        <div>
            <form>
                <label>Selecione sua opção:
                    <select name="selecione" onChange={(e) => setSelect(e.target.value)}>
                        <option value="Aluno">Aluno</option>
                        <option value="Professor">Professor</option>
                        <option value="Servidor">Servidor</option>
                        <option value="Diretor">Diretor</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>A opção escolhida foi: {select}</p>

        </div>
    )
}