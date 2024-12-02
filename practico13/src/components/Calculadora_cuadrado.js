import React, {useState} from 'react'

function Calculadora_cuadrado() {
    const [numero, setNumero] = useState(0);
    const [cuadrado, setCuadrado] = useState(0);

    const calculo = (e) => {
        const valor = parseInt(e.target.value);
        setNumero(valor);
        setCuadrado(valor * valor);
    }
    return (
        <div>
            <h1>Calculadora de cuadrado</h1>
            <input type='number' value={numero} onChange={calculo} />
            <p>Cuadrado = {cuadrado}</p>
        </div>
    )
}

export default Calculadora_cuadrado