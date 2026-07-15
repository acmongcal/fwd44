import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

/**
 * Declare a function that receives an array of things to do,
 * and conditionally renders "nothing to do" if the array is empty,
 * An unordered list of all items if there are 3 or less items,
 * An unordered list of all items if there are more than 3 items,
 * followed by a message that says "you have much to do!"
 */

function App() {
	const user = {
		name: "Gabbie Bade",
		age: 35,
		location: "Coquitlam, BC",
		ToDoItems: [
			"Wash Car",
			"Deposit Cheque",
			"Do the Dishes",
			"Study JavaScript",
			"Play Games",
		],
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Introduction to JSX</h1>
			</header>
		</div>
	)
}

export default App
