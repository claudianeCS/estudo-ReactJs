import List from './components/List';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';
import Condicional from './Condicional';

function App() {
  const name = "Bia"
  return (
    <div className="App">
      <Frase/>
      <HelloWorld/> 
      <SayMyName nome="Claudiane"/>
      <SayMyName nome="Maria"/> 
      <SayMyName nome={name}/> 
      <Pessoas nome="Claudiane" idade="22" profissao="Desenvolvedor"/>
      <List/>

      <Condicional/>
    </div>
  );
}

export default App;
