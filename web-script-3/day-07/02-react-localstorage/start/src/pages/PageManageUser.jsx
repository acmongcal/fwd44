import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserManager from '../components/UserManager';
import { appTitle } from '../globals/globalVariables';
import { useUser } from '../hooks/useUser';

function PageManageUser() {

	const { user } = useUser();

	useEffect(() => {
		document.title = `${appTitle} - Manage User`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Manage User</h2>
                {user.username === null ?
                    <p>User not set. Please <Link to="/create-user">create a user</Link>.</p> :
                    <UserManager />
                }
            </section>
	    </main>
    );

}

export default PageManageUser;
