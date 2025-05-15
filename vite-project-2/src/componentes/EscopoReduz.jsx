import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick(){
        return(
            alert('handleClick')
        )
    }

    function mudarCor(elemento) {
        if (elemento.style.backgroundColor == "red") {
          elemento.style.backgroundColor = "blue";
        } else {
          elemento.style.backgroundColor = "red";
        }
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
            <div className="cont" onClick={"mudarCor(this)"}>Clique</div>
        </div>
        </>
    )
}

export default EscopoReduz