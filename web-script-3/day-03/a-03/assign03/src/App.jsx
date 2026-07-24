import "./App.css";
import { useState } from "react";
import { calculatorButtons } from "./globals/calculator-button-data";
function App() {
  const [arrayCalc, setArrayCalc] = useState([]);
  const [memory, setMemory] = useState([]);

  function compute(array) {
    let expression = "";
    array.map((exp, i) => {
      if (exp.type === "number" && exp.sign === "-") {
        expression = expression + (exp.sign + exp.value);
      } else if (exp.type === "number" && exp.sign === "+") {
        expression = expression + exp.value;
      } else if (exp.type === "operator" && i != array.length - 1) {
        if (exp.value === "Add") {
          expression += "+";
        } else if (exp.value === "Subtract") {
          expression += "-";
        } else if (exp.value === "Multiply") {
          expression += "*";
        } else if (exp.value === "Divide") {
          expression += "/";
        }
      }
    });
    expression = expression.replaceAll("--", "+");
    return new Function("return " + expression)();
  }

  function computeArray(array) {
    let newSign = "+";
    let newVal = compute(array);
    if (Math.sign(newVal) == -1) {
      newSign = "-";
      newVal *= -1;
    }
    return [
      {
        type: "number",
        value: newVal,
        prevOP: "memory",
        sign: newSign,
      },
    ];
  }

  function updateNumber(newNumber, operation, sign = "+") {
    const newArrayCalc = arrayCalc.map((e, i) => {
      if (i === arrayCalc.length - 1) {
        return {
          type: "number",
          value: newNumber,
          prevOP: operation,
          sign: sign,
        };
      } else {
        return e;
      }
    });
    setArrayCalc(newArrayCalc);
  }

  function removeCalc(index) {
    setArrayCalc(arrayCalc.filter((e, i) => i !== index));
  }
  function validateOperations(input) {
    const operations = ["operator", "sign", "decimal"];
    switch (input.type) {
      case "clear":
        if (input.value === "All Clear") {
          setArrayCalc([]);
        } else {
          removeCalc(arrayCalc.length - 1);
        }
        break;
      case "enter":
        if (arrayCalc.length != 0) {
          setArrayCalc(computeArray(arrayCalc));
        }
        break;
      case "operator":
        if (
          arrayCalc.length != 0 &&
          !operations.includes(arrayCalc[arrayCalc.length - 1].type)
        ) {
          if (
            input.value === "Percent" &&
            arrayCalc[arrayCalc.length - 1].type === "number"
          ) {
            updateNumber(
              arrayCalc[arrayCalc.length - 1].value / 100,
              input.value,
              arrayCalc[arrayCalc.length - 1].sign,
            );
          } else if (
            input.value === "Square Root" &&
            arrayCalc[arrayCalc.length - 1].type === "number"
          ) {
            updateNumber(
              Math.sqrt(arrayCalc[arrayCalc.length - 1].value),
              input.value,
              arrayCalc[arrayCalc.length - 1].sign,
            );
          } else {
            setArrayCalc([
              ...arrayCalc,
              { type: input.type, value: input.value },
            ]);
          }
        }

        break;
      case "memory":
        if (input.value === "Memory Clear") {
          setMemory([]);
        } else if (input.value === "Memory Recall") {
          if (
            arrayCalc.length != 0 &&
            arrayCalc[arrayCalc.length - 1].type !== "number"
          ) {
            setArrayCalc([...arrayCalc, memory[0]]);
          } else {
            if (memory.length != 0) {
              setArrayCalc([memory[0]]);
            }
          }
        } else if (
          memory.length != 0 &&
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          input.value === "Memory Addition"
        ) {
          console.log("Add memory");
          const addMemory = [
            ...memory,
            {
              type: "operator",
              value: "Add",
            },
            arrayCalc[arrayCalc.length - 1],
          ];
          setMemory(computeArray(addMemory));
        } else if (
          memory.length != 0 &&
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          input.value === "Memory Subtract"
        ) {
          console.log("Minus memory");
          const subtractMemory = [
            ...memory,
            {
              type: "operator",
              value: "Subtract",
            },
            arrayCalc[arrayCalc.length - 1],
          ];
          setMemory(computeArray(subtractMemory));
        } else if (
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          input.value === "Memory Save"
        ) {
          const newMemory = {
            type: arrayCalc[arrayCalc.length - 1].type,
            value: arrayCalc[arrayCalc.length - 1].value,
            prevOP: "memory",
            sign: arrayCalc[arrayCalc.length - 1].sign,
          };
          setMemory([newMemory]);
        }
        break;
      case "sign":
        if (
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          arrayCalc[arrayCalc.length - 1].sign === "+"
        ) {
          console.log("Negative");
          updateNumber(
            arrayCalc[arrayCalc.length - 1].value,
            arrayCalc[arrayCalc.length - 1].prevOP,
            "-",
          );
        } else if (
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          arrayCalc[arrayCalc.length - 1].sign === "-"
        ) {
          console.log("Positive");
          updateNumber(
            arrayCalc[arrayCalc.length - 1].value,
            arrayCalc[arrayCalc.length - 1].prevOP,
            "+",
          );
        }
        break;
      case "decimal":
        if (!String(arrayCalc[arrayCalc.length - 1].value).includes(".")) {
          updateNumber(
            arrayCalc[arrayCalc.length - 1].value + input.text,
            "append",
            arrayCalc[arrayCalc.length - 1].sign,
          );
        }
        break;
      case "number":
        if (
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          arrayCalc[arrayCalc.length - 1].prevOP === "append"
        ) {
          updateNumber(
            arrayCalc[arrayCalc.length - 1].value + "" + input.text,
            "append",
            arrayCalc[arrayCalc.length - 1].sign,
          );
        } else if (
          arrayCalc.length != 0 &&
          arrayCalc[arrayCalc.length - 1].type === "number" &&
          arrayCalc[arrayCalc.length - 1].prevOP !== "append"
        ) {
          setArrayCalc([
            {
              type: input.type,
              value: input.value,
              prevOP: "append",
              sign: "+",
            },
          ]);
        } else {
          setArrayCalc([
            ...arrayCalc,
            {
              type: input.type,
              value: input.value,
              prevOP: "append",
              sign: "+",
            },
          ]);
        }
        break;
      default:
        break;
    }
  }
  function displayExp(exp) {
    if (exp.type === "number" && exp.sign === "+") {
      return exp.value;
    } else if (exp.type === "number" && exp.sign === "-") {
      return exp.sign + exp.value;
    } else if (exp.type === "operator") {
      if (exp.value === "Add") {
        return " + ";
      } else if (exp.value === "Subtract") {
        return " - ";
      } else if (exp.value === "Multiply") {
        return " \u00d7 ";
      } else if (exp.value === "Divide") {
        return " \u00f7 ";
      }
    }
  }
  return (
    <div className="wrapper">
      <h1>Calculator App</h1>
      <section className="calculator">
        <div className="calc-display">
          {arrayCalc.length > 0 && (
            <ul className="calculations">
              {arrayCalc.map((calc, i) => (
                <li key={i}>{displayExp(calc)}</li>
              ))}
            </ul>
          )}
          <h2>
            {arrayCalc.length != 0 && arrayCalc[arrayCalc.length - 1].value}
          </h2>
        </div>
        <div className="calc-buttons">
          {calculatorButtons.map((button, i) => (
            <button
              className={button.className}
              onClick={() => validateOperations(button)}
              key={i}
              value={button.value}
            >
              {button.text}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
