import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num){
    const n = parseInt(num)

    if(n<0) return -1
    if(n===0) return 1
    return calcFatorial(n-1) * n
    
}

function verifyParImpar(num){
    const n = parseInt(num)
    
    return n % 2 === 0 ? "par" : "impar"
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [parImpar, setParImpar] = useState('');
  //dentro do [] no segundo parâmetro vai a dependência para a função ser chamada
  // sempre que number mudar vai ser chamado o useEffect
  useEffect(()=>{
    setFatorial(calcFatorial(number))
  }, [number])  

  useEffect(()=>{
    setParImpar(verifyParImpar(number))
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio 01"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <span className="text">{number}</span>
      </div>

      <SectionTitle title="Exercicio 02"/>
      <div className="center">
        <span className="text">Status: {parImpar}</span>
      </div>
    </div>
  );
};

export default UseEffect;
