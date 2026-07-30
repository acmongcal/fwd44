import { useContext } from 'react';
import LogIn from './LogIn';
import { UserContext } from '../context/UserContext';

function Header({ title='Awesome App' }) {

    const { user } = useContext(UserContext);

    return (
        <header>
            <h1>{title}</h1>
            <div className="user">
                {user !== null && <p>Hello, {user}!</p>}
                <LogIn />
            </div>
        </header>
    );
}


export default Header;
