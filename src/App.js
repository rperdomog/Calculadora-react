
import './styles/App.css';
import prince from './images/petitprince.png'
import { Boton } from './components/Boton';
import { Pantalla } from './components/Pantalla.js'
import { BotonClear }from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [entrada, setEntrada] = useState("");

  const agregarInput = val => {
    setEntrada(entrada + val);
  }
  const calculateResult = () => {
    if (entrada){
      setEntrada(evaluate(entrada))
    }else {
      setEntrada("Type a number")
    }
  }
  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={prince}
          className='calculator-logo'
          alt='Logo Calculator'/>
        <h1 className='title-logo'>Little Prince Calculator</h1>
      </div>
      <div className='container-calculator'>
        
        <Pantalla entrada={entrada}/>
               
        <div className='row-calculator'>
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className='row-calculator'>
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className='row-calculator'>
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className='row-calculator'>
          <Boton handleClick={calculateResult}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className='row-calculator'>
          <BotonClear handleClear={() => setEntrada("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
