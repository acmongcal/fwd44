import { NavLink } from 'react-router-dom';

function Nav(){
    
    function handleBlurOnClick(e){
        e.target.blur();
    }

    return (
        <nav onClick={handleBlurOnClick}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/manage-user">Manage User</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
    
}

export default Nav;