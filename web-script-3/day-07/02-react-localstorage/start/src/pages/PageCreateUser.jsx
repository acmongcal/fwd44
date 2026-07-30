import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import UserManager from '../components/UserManager';
import { appTitle } from '../globals/globalVariables';
import { useUser } from '../hooks/useUser';

function PageCreateUser() {

    const [formValid, setFormValid] = useState(false);
	const { user } = useUser();

	useEffect(() => {
		document.title = `${appTitle} - Create User`;
	}, []);

    function handleValidation(){
        setFormValid(true);
    }

    return (
        <>
            {formValid && <Navigate to="/" replace={true} />}
            <main>
                <section>
                    <h2>Create User</h2>
                    {user.username !== null ?
                        <p>User already created. Please go to the <Link to="/manage-user">Manage User</Link> page to update your user.</p> :
                        <UserManager handleValidation={handleValidation} createNewUser={true} />
                    }
                </section>
            </main>
        </>
    );

}

export default PageCreateUser;
