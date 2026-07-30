// Nav
import {NavLink} from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const Nav = ({handleShowHideNav}) => { 
    
    const closeNav = (e) => {
        if(window.innerWidth <601){
            handleShowHideNav();
        }
        else{
            e.target.blur();
        }
    }
    
    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
    
};

export default Nav;