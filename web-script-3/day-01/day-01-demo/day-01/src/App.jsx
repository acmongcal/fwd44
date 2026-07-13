
import './App.css'
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    'Camera',
    'Laptop',
    'Monitor',
    'Smartphone',
    'Smart Watch',
    'Speaker',
    'Headphones',
    'Microphone',
    'Keyboard',
    'Mouse'
  ];
  function addProduct(e){
    e.preventDefault();
    setCart([...cart,e.target.elements.product.value]);
  }
  function removeProduct(index){
    setCart(cart.filter((product, i) => i !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Spree</h1>
      </header>
      <main>
        <section className="shopping-cart">
					<form onSubmit={addProduct}>
            <label htmlFor="product">Product</label>
            <select name="product" id="product">
              {products.map((product, i) => (<option key={i} value={product}> {product} </option>))}
            </select>
						<button type="submit">Add Product</button>
					</form>
          <div className="cart">
            {cart.length==0 && <p>Adds some items</p>}
            {cart.length==1 && <p>You have one item in your cart</p>}
            {cart.length>1 && <p>You have {cart.length} item(s) in your cart</p>}
            
            {cart.length >0 &&
              <ul>
                {cart.map((product, i) => (<li key={i} value={product}> {product} <button onClick={()=>removeProduct(i)}>❌</button> </li>))}
              </ul>
            }
          
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
