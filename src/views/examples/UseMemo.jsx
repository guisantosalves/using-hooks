import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(num1, num2){
    var n1 = parseInt(num1)
    var n2 = parseInt(num2)
    const future = Date.now() + 2000;
    while(Date.now() < future){} //espera 2s
    return n1 + n2
}


const UseMemo = (props) => {

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  //usando useMemo
  //ele so vai fazer a operacao de soma quando o valor de n1 ou n2 for alterado
  const result = useMemo(() => sum(n1, n2), [n1, n2])

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <SectionTitle title="Exercicio 01"/>
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />

        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />

        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(e.target.value)}
        />
        
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
