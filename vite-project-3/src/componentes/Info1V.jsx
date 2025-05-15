import { useState } from "react"

export default function Info1V() {
    let [valor, setValor] = useState(0)

    return(
        <>
            <div>
                <button onClick={() => setValor(valor+1)}>Clickes: {valor}</button>
            </div>
        </>
    )
}