import { Link } from 'react-router-dom';
import Nav from './Nav';
import { appTitle } from '../globals/globals';

const Header = () => {

    return (
        <header className="show">
            <h1><Link to="/">{appTitle}</Link></h1>
            {/**
             * HTML for the Hamburger icon modified from HTMl 
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav />
        </header>
    );

};

export default Header;