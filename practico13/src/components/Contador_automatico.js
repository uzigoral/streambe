import React, { useState, useEffect } from 'react';


function Contador_automatico() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        const intervalo = setInterval(() => {
        setContador(contador => contador + 1);
        }, 1000);
      }, []); // El array vacío asegura que esto solo se ejecute una vez

    return (
        <h1>Contador Automático: {contador}</h1>
    )
}

export default Contador_automatico

