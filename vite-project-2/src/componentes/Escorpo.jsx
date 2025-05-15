function Escorpo () {
    const label='Clique Aqui'
    return(
        <>
            <div>
                <h2>Texto</h2>
                <p>Mais texto</p>
            </div>
            <div>
                <button>{label}</button>
                <button onClick={() => label = 'Clicou'}>{label}</button>
            </div>
        </>
    )
}
export default Escorpo