import { useState } from "react"; //importando o hook useState

function HookUseState() {
  //sintaxe do hook useState
  //CONST [1º VALOR, 2º VALOR] =  HOOK USESTATE (VALOR INICIAL)
  //const [VALOR ATUAL DO ESTADO,  FUNÇÃO QUE ATUALIZA O ESTADO] = useState(VALOR INICIAL)

  //cantor é o Estado, setCantor é a forma de modificar esse estado
  const [cantor, setCantor] = useState("Zeca Pagodinho");

  //const Mudar = () => setCantor("Alcione");  //Mudar apenas uma vez

  //Uma função para mudar os cantores utilizando if e else
  //   const Mudar = () => {
  //     //Forma de mudar com o if e else
  //     if (cantor === "Zeca Pagodinho") {
  //       setCantor("Alcione");
  //     } else {
  //       setCantor("Zeca Pagodinho");
  //     }
  //   };

  //Uma função para mudar os cantores utilizando o ternário
  // ? Perguntando se a comparação é verdadeira  'SE'
  // : Senão , caso não seja verdadeira

  const Mudar = () => {
    setCantor(cantor === "Zeca Pagodinho" ? "Alcione" : "Zeca Pagodinho");
  };

  return (
    <>
      <h1> {cantor} </h1>
      <button
        onClick={() => {Mudar()}}>
        Mudar o cantor
      </button>
    </>
  );
}

export default HookUseState;
