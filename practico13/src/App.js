import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calculadora_cuadrado from './components/Calculadora_cuadrado'
import Contador_automatico from './components/Contador_automatico'
import Calcular_precio_total from './components/Calcular_precio_total'

function App() {
  return (
    <div>
      <Contador_automatico/>
      <Calculadora_cuadrado/>
      <Calcular_precio_total/>
    </div>  
    );
}

export default App;
