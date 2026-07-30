import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageHome(){

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

	return (
		<main>
			<section>
				<h2>Upcoming Projects</h2>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatum, similique, doloribus facilis quas dolorum libero corporis hic dicta earum, repudiandae dolore praesentium nulla. Delectus unde incidunt rem ex expedita?</p>
			</section>
		</main>
	);

}

export default PageHome;