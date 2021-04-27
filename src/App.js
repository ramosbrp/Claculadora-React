import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 400;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;

`;

function App() {
  
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState('');


  function calcSoma(n1,n2){
    return n1+n2

  }

  function calcPercent(n1, n2){
    return (n1*n2)/100
  } 

  return (
    <>   
      <h1>Calculadora de Gorjetas</h1>
      <p>Quanto deu a conta?</p>
      <Input placeholder='Digite um valor' type='number' value={conta} onChange={(e)=>setConta(e.target.value)} />
      <p>Qual a porcentagem da gorjeta?</p>
      <Input placeholder='Digite um valor' type='number' value={gorjeta} onChange={(e)=>setGorjeta(e.target.value)} />
      
      {conta.length > 0 &&
        <>
          <p>Sub-total: R${conta}</p>                  
          <p>Gorjeta: ({gorjeta}%) R${calcPercent(conta, gorjeta)}</p>                  
          <p><b>Total: R$ {calcSoma(parseInt(conta), calcPercent(conta, gorjeta))}</b></p>
        </>
      }
      
    </>
    
  );
}

export default App;





