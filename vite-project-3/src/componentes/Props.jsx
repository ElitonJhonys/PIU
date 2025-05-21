export default function Props ({nome, newname}) {
/*export default function Props (props) { Todos os atributos sao criados automaticamente -> props.atributo */
let aluno = "ELE"
    return (
        <>
            <div>
                <h2>Props</h2>
                <p>o nome {nome} foi enviado via props.</p>
                <p>o nome {aluno} foi enviado via let.</p>
                <p>{newname}</p>
            </div>
        </>
    )
}