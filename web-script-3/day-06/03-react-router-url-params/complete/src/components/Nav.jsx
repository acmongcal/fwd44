// Nav
import { NavLink } from 'react-router-dom';
const Nav = () => {

    function blur(e){
        e.target.blur();
    }

    return (
        <nav className="main-nav" onClick={blur}>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );

};

export default Nav;
