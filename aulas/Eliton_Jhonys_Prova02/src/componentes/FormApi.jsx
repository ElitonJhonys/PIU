import { useState, useEffect } from 'react';

export default function FormApi() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [inputValue, setInputValue] = useState(''); // Tentei criar uma variavel que recebe o numero dado pelo input
    
    // Usamos uma função assíncrona 
    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums'); //fecth faz uma requisição HTTP utilizando o método GET
            const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
            setUsuarios(data); // Atualiza o estado com os dados recebidos
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
        }

    useEffect(() => {fetchUsuarios()} , []); // O array vazio garante que o efeito execute apenas uma vez


        const handleChange = (event) => {
            setInputValue(event.target.value);
          };
          
     return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} /> 
            <ul>
                
                {usuarios.filter(selecionado => selecionado.userId === {inputValue}).map(user => (
                    <li key={user.id}>{user.id} = {user.userId}</li>
                ))}
            </ul>
        </div>
    );
} 
// tentei fazer a variavel inputValue ser detectada pelo filter. Apesar da variavel estar sendo alterada, ela nao esta sendo detectada.