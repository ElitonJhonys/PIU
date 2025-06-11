import {carros} from './dados_carro'
// Chama as informacoes de carros

export default function C02(){
    const todos = carros
    // cria uma variavel que vai armazenar as informacoes de carros

    const selecionados = carros.filter(selecionado => selecionado.cor === 'vermelho')
    // cria uma variavel que vai armazenar as informacoes de carros em outra variavel se o carro for vermelho

    return(
        <div>
            <br /><br />
            <ul>
                {selecionados.map(selecionado => (
                    <li key={selecionado.id}>
                        <p>O modelo selecionado foi {selecionado.modelo}, seu ano é {selecionado.ano}. Seu id é {selecionado.id}</p>
                    </li>
                ))}
            </ul>
            
            <br /><br />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p>O modelo selecionado foi {todo.modelo}, seu ano é {todo.ano}. Seu id é {todo.id}. Sua cor é {todo.cor}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
    // O primeiro ul exibe informacoes filtradas. chama atravez do map a exibicao das informacoes em coxetes

    // O o segundo ul, informacoes gerais. dessa vez, sem precisar de filtro
}