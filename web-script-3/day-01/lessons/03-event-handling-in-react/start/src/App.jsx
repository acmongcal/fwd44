import "./App.css"
import { useState } from "react";
/**
 * Events in React
 * 
 * Create add, subtract, and reset functions that console.log a message
 * when they are clicked.
 */

function App() {
	const [counter, setCounter] = useState(0);

	function addCounter(){
		setCounter(counter+1);
		console.log(counter);
		console.log("Add one to the counter...");
	}
	function subtractCounter(){
		setCounter(counter-1);
		console.log(counter);
		console.log("Subtract one to the counter...");
	}
	function resetCounter(){
		setCounter(0);
		console.log(counter);
		console.log("Reset the counter...");
	}
	function sayHello(user){
		console.log(`Hello ${user}`);
	}
	return (
		<>
			<header className="App-header">
				<h1>Events in React</h1>
			</header>
			<main className="counter-section">
				<section>
					<p>Counter: {counter}</p>
					<button onClick={addCounter}>Add 1 to counter</button>
					<button onClick={subtractCounter}>Subtract 1 from counter</button>
					<button onClick={resetCounter}>Reset the counter</button>	
				</section>
				<section className="say-hello-section">
					<button onClick={()=> sayHello('Kuuhaku')}>Say Hello</button>
				</section>
			</main>
		</>
	)
}

export default App
