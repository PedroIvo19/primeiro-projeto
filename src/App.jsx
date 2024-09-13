
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import Rococo from './assets/bonitao.webp'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentRemake from './components/ComponentRemake.jsx';

function App() {

  const n = 15
  const classDiferente = false

  return (
    <div className="App">
        
     {/* <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/> */}


      <ComponentRemake/>

      <OutroComponent/>

      <p style={{color:"black", padding:"25px", fontSize:"25px", backgroundColor:"yellow"}}>Este paragrafo é do App.jsx</p>

      {/*Css com if ternário */}
      <h3 style = {n > 10 ? ({color:"green", backgroundColor:"black"}) : ({color:"red", backgroundColor:"blueviolet"}) } > Texto com o primeiro estilo</h3>


      {/*Css com if ternário */}
      <h3 style = {n < 10 ? ({color:"green", backgroundColor:"black"}) : ({color:"red", backgroundColor:"blueviolet"}) } > Texto com o segundo estilo</h3>


      <h2 className={classDiferente ? "red-title" : "normal-title"}>Texto com classe diferente 1</h2>
      



      {/*Importação pela pagina public */}
      <img src='./barroco.jpg' width={900} height={400}></img>

      <img src={Rococo} width={900}  height={400}></img>

    </div>
  );
}

export default App;
