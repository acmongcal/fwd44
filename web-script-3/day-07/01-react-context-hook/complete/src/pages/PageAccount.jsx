import { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AccountManager from '../components/AccountManager';
import { appTitle } from '../globals/globalVariables';

function PageAccount() {

	const { user } = useContext(UserContext);

	useEffect(() => {
		document.title = `${appTitle} - Account`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Manage Account</h2>
                {user === null && <p>Log in to manage your account.</p>}
                {user !== null && <AccountManager />}
            </section>
	    </main>
    );

}

export default PageAccount;
