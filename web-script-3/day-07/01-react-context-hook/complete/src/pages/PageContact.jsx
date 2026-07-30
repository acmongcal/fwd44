import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageContact(){

	useEffect(() => {
		document.title = `${appTitle} - Contact`;
	}, []);

	return (
		<main>
			<section>
				<h2>Contact Us</h2>
				<p>Email us at: <a href="#0">hello@email.com</a></p>
			</section>
		</main>
	);

}

export default PageContact;
