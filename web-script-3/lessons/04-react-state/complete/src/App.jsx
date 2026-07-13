import { useState } from "react"
import "./App.css"

function App() {
	const [cart, setCart] = useState([])

	function addItemToCart(e) {
		e.preventDefault()
		const product = e.target.elements.product.value
		setCart([...cart, product])
	}

	function removeFromCart(index) {
		console.log("Remove item from cart...")
		setCart(cart.filter((item, i) => i !== index))
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Shopping Spree</h1>
			</header>
			<main>
				<section className="shopping-cart">

					<form onSubmit={addItemToCart}>
						<div>
							<label htmlFor="product">Product</label>
							<select name="product" id="product">
								<option value="Stereo">Stereo</option>
								<option value="Television">Television</option>
								<option value="Laptop">Laptop</option>
							</select>
						</div>
						<button type="submit">Add Product</button>
					</form>

                    <div className="cart">
                        {cart.length > 0 && (
                            <p>You have {cart.length} products in your cart.</p>
                        )}
                        {cart.length === 0 && <p>Add an item to your cart!</p>}

                        {cart.length > 0 && (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>{item} <button onClick={() => removeFromCart(index)}>❌</button></li>
                                ))}
                            </ul>
                        )}
                    </div>


				</section>
			</main>
		</div>
	)
}

export default App
