import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  //Exemplo 2
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <h1> {contador} </h1>
      <button onClick={() => setContador(contador + 1)}> - </button>
      <button onClick={() => setContador(contador - 1)}> - </button>
      <button onClick={() => setContador(0)}> Resetar </button>

      <div>
        <h2>Com limitações</h2>
        <button
          onClick={() => {
            if (contador < 10) {
              setContador(contador + 1);
            }
          }}
        >
          +
        </button>
        <button onClick={decrementar}> - </button>
      </div>
    </>
  );
}

//Evento onClick: Executa uma funcionalidade ao clicar no botão.
