// Page - Contact

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageContact = () => {

	useEffect(() => {
		document.title = `${appTitle} - Contact`;
	}, []);

	return (
    	<section>
			<h2>Contact Me</h2>
			<p>Email me at: <a href="mailTo:fwd@bcit.ca">fwd@bcit.ca</a></p>
		</section>
	);

};

export default PageContact;