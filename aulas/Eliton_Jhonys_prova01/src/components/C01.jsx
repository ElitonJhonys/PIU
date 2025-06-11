import { useState } from "react"

export default function C01() {
    let [valor, setValor] = useState(0)
    // seta o numero como 0
    

    return(
        <>
            <div>
                <button onClick={() => setValor(valor+1)}>aumentar</button>
                <h1>{valor}</h1>
                <button onClick={() => setValor(valor-1)} 
                style={{
                  }}
                >
                diminuir
                </button>

            </div>
        </>
    )
    // o primeiro butao aumenta o valor

    // o segundo diminui.
}