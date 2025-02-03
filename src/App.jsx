//Importando os componentes
import Header from "./compenents/header/Header.jsx"; //Importando o componente Header.jsx
import Main from "./compenents/main/Main.jsx"; //importando o componente Main.jsx
import Footer from "./compenents/footer/Footer.jsx" //importando o componente Footer.jsx
import HookUseState from "./compenents/aulaUseState/HookUseState.jsx" //importando o componente HookUseState
import Contador from "./compenents/aulaUseState/Contador.jsx";

function App() {
  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      <HookUseState />
      <Contador />
    </>
  );
}

export default App;
