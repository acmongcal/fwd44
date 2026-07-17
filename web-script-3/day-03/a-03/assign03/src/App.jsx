import './App.css'
import { useState } from "react";
import {calculatorButtons} from "./globals/calculator-button-data";
import Button from './components/Button';
import { compute } from './utilities/utils';

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [output, setOutput] = useState("");
  function updateValue(button){
    setCurrentValue(button.value + " : " + button.type);
    setOutput(output+button.text);
  }
  return (
    <div className="wrapper">
      <h1>Calculator App</h1>
      <p>Calc: [ {currentValue} ]</p>
      <section>
        {calculatorButtons.map((button, i) => <Button     
        buttonDetails={button}
        key = {i}
        updateValue = {updateValue}/>)
        }
      </section>
      <p>Current output: [{output}]</p>
      <button onClick={()=>setOutput(compute("reset"))}>Output</button>
    </div>
  );
  
}

export default App;
