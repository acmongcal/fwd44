// Header
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import { appTitle } from '../globals/globals';
import useIsMobile from '../hooks/useIsMobile.jsx';
import { UNSAFE_WithHydrateFallbackProps } from 'react-router-dom';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const isMobile = useIsMobile();
    const toggleNav = () => {
        setShowNav(!showNav);
    }
    useEffect(()=>{
        if(!isMobile){
            setShowNav(false);
        }
    },[isMobile]);

    return (
        <header className={showNav? "show":""}>
            <h1><Link to="/">{appTitle}</Link></h1>
            <button className='btn-main-nav'
            onClick={toggleNav}>
                Menu
            </button>
            <Nav handleShowHideNav={toggleNav}/>
        </header>
    );
}

export default Header;
