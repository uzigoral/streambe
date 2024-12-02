import React from 'react'

function Calcular_precio_total() {
    const productos = [
        {nombre: "Producto1", precio: 50},
        {nombre: "Producto2", precio: 100},
        {nombre: "Producto3", precio: 150}
    ];
    const precio_total = productos.reduce((total, producto) => total + producto.precio,0);


    return (
    <div>
        <h1>Precio total de los productos</h1>
        <ul>
            {productos.map((producto, index) =>(
                <li key={index}>{producto.nombre}: ${producto.precio}</li>
            ))}
        </ul>
        <p>total: ${precio_total}</p>
    </div>
    )
}

export default Calcular_precio_total