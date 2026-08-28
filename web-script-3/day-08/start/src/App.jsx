import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import WeatherProvider from "./components/WeatherProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <div className="app-container">
          <header className="app-header">
            <h1>🌤️ Weather App</h1>
            <nav className="nav-links">
              <NavLink to="/">Weather</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </WeatherProvider>
    </BrowserRouter>
  );
}
export default App;
