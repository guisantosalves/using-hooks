import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";


const merge = (s1, s2) => {
    return s1 + s2
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  //ele conta no objeto que é criado (count) a quantidade de vezes que houve a renderização do componente
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);
  
  console.log(myInput1)
  console.log(myInput2)

  useEffect(()=>{
    count.current++
    myInput2.current.focus()
  }, [value1])
  useEffect(() => {
    count.current++
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio 01" />
      <div className="center">
        <div>
          <span className="text">valor:</span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myInput1}
          type="text"
          className="input"
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio 02" />
        <div className="center">
          <input
            ref={myInput2}
            type="text"
            className="input"
            onChange={(e) => setValue2(e.target.value)}
          />
          <span className="text">{value2}</span>
        </div>
    </div>
  );
};

export default UseRef;
