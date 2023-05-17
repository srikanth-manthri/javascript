
import './App.css';
import Child from './Componets/Child';
import Example from './Componets/Classexp';
import Parent from './Componets/Parent';
// import Header from "./Componets/Home";
// import MySlider from "./Componets/Slider";
import Practice from './Componets/Practice';
import Condinatinal from './Componets/Condinatinal';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <MySlider /> */}
      <Practice />
      <Example />
      <Parent />
      <Child />
      <Condinatinal />
    </div>
  );
}

export default App;
