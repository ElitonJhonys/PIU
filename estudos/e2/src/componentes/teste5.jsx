import { useState } from 'react'

// Aqui utilizaremos useState para armanezar o valor dos inputs. Os eventos para formulários será o onChange e o onSubmit

export default function FormState(){

    const[name,setName] = useState('')
    const[idade,setIdade] = useState('')
    const[bio,setBio] = useState('')
    const[forme,setforme]= useState([])
    const handleName = (e) => {
        setName(e.target.value)
    }

    function colocadados() {
        const novoDado = {
            nome: name,
            idade: idade,
            bio: bio
        }
    
        setforme([...forme, novoDado]); // se tirar ...forme, nao acrecenta
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        colocadados(name, idade, bio);
        console.log(name, idade, bio);

        //dessa forma. para resetar o formulário acionamos os set dos states com valores vazios

        setName("");
        setIdade("");
        setBio("");

    }

    return(
        <div>

            <h2>Formulário com useState e onChange</h2>

            {/* Evento onSubmit será disparado quando o formulário for enviado. Aqui, teremos que parar o envio para não
            perder os dados. Utilizaremos o objeto de evento e com o seu atributo prevant.default */}

            <form onSubmit={handleSubmit}>

            {/* <form onSubmit={handleSubmit}> */}

                <div>

                    <label>
                        <span>Nome:</span>
                        {/* comentar em sala o atributo value */}
                        <input type="text" name="nome" onChange={handleName} value={name} placeholder='Digite seu nome:' />
                    </label>

                </div>

                <div>

                    <label>
                        <span>Idade:</span>
                        <input type="number" name="idade" onChange={(e) => setIdade(e.target.value)} value={idade} placeholder='Digite sua idade:' />
                    </label>

                    <label>

                        <span>Descrição:</span>
                        <textarea onChange={(e) => setBio(e.target.value)} value={bio}>Faça sua descrição...</textarea>
                        
                    </label>

                    <input type="submit" value='Enviar' />

                </div>
            </form>

            <p>O seu nome é: {name}</p>
            <p>Sua idade é: {idade}</p>
            <p>Sua descrição: {bio}</p>
            {forme.map((item, index) => (
        <li key={index}>
            Nome: {item.nome}, Idade: {item.idade}, Bio: {item.bio}
        </li>
    ))}

        </div>

    )
}