import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick(){
        return(
            alert('handleClick')
        )
    }

    function mudarCor() {
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
// função floor arredonda valor. random gere numero aleatório. randomColor irá selecionar de forma aleatória uma cor.
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

    return(
        <>
        <div>
            <button onClick={() => console.log("Voce Clicou")}>Clique</button>
            <button onClick={() => alert('Voce clicou')}>NOVO</button>
        </div>
        <div>
            <button onClick={handleClick}></button>
        </div>
        <div>
            <div className="cont" onClick={mudarCor}>Clique</div>
        </div>
        </>
    )
}

export default EscopoReduz