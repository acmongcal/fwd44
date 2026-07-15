import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

/**
 * Declare a function that receiVes an array of things to do,
 * and conditionally renders "nothing to do" if the array is empty,
 * An unordered list of all items if there are 3 or less items,
 * An unordered list of all items if there are more than 3 items,
 * followd by a message that says "you have much to do!"
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

	const outputThingsToDo = thingsToDo => {
		if( !thingsToDo || thingsToDo.length < 1 ) {
			return <p>Nothing to do</p>
		}

		if( thingsToDo.length > 0 && thingsToDo.length <= 3 ) {
			return (
				<ul>
					{thingsToDo.map( (item, index) => <li key={index}>{item}</li> )}
				</ul>
			)
		} else {
			return (
				<>
					<ul>
						{thingsToDo.slice(0, 3).map( (item, index) => <li key={index}>{item}</li> )}
					</ul>
					<p>You have much to do!</p>
				</>
			)
		}
	}


	return (
		<div className="App">
			<header className="App-header">
				<h1>Introduction to JSX</h1>
			</header>
			{/* This is a JSX comment */}
			<h2>User info</h2>

			{/* Ternary Operator */}
			<p>
				{user.name ? user.name : " anonymous"}
			</p>

			{/* Logical AND (&&) operator */}
			{user.age > 18 && <button>Vote Now</button>}

			<div className="things-to-do">
				<h2>Things To Do</h2>
				{outputThingsToDo(user.ToDoItems)}
			</div>
		</div>
	)
}

export default App
