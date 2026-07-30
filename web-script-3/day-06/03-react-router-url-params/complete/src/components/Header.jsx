// Header

import Nav from './Nav';
import { appTitle } from '../globals/globals';

const Header = () => {

    return (
        <header>
            {/* The below anchor tag code is incorrect...
			    Use React Router's Link component for internal
				links */}
            <h1><a href="/">{appTitle}</a></h1>
            <Nav />
        </header>
    );
}

export default Header;
