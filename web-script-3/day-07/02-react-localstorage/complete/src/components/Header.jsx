// Header
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

function Header({ title='User App' }) {

    const { user, deleteUser } = useUser();

    function handleDeleteUser(){

        const confirmDelete = window.confirm('Are you sure you want to the delete the user?');

        if(confirmDelete){
            deleteUser();
        }

    }

    return (
        <header>
            <h1>{title}</h1>
            <div className="user-buttons">
                {user.user && user.location ? <p>Hello, {user.user}! How's the weather in {user.location}?</p> : null}
                {user.user ? (
                    <button onClick={handleDeleteUser}>Delete User</button>
                ) : (
                    <Link to="/create-user">Create User</Link>
                )}
            </div>
        </header>
    );
}

export default Header;
