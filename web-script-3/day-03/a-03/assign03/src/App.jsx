import './App.css'
import { useState } from "react";
import {calculatorButtons} from "./globals/calculator-button-data";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  function updateValue(value, type){
    setCurrentValue(value + " : " + type);
  }
  return (
    <div className="wrapper">
      <h1>Calculator App</h1>
      <p>Calc: [ {currentValue} ]</p>
      <section>
        {calculatorButtons.map((button, i) => (<button onClick={()=>updateValue(button.value,button.type)} key={i} value={button.value}>{button.text}</button> ))}
      </section>
    </div>
  );
  
}

export default App;
