// Page - Portfolio
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import '../styles/gallery.scss';
import cat01 from '../images/kittens-01.jpg';
import cat02 from '../images/kittens-02.jpg';
import cat03 from '../images/kittens-03.jpg';
import cat04 from '../images/kittens-04.jpg';
import cat05 from '../images/kittens-05.jpg';
import cat06 from '../images/kittens-06.jpg';

const PagePortfolio = () => {

	useEffect(()=>{
		document.title = `${appTitle} - Portfolio`;
	},[]);

	return (
		<main>
			<section>
				<h2>Portfolio Page</h2>
				<div className="gallery">
					<Link to="/portfolio/1" className="gallery-item"><img src={cat01} alt="Orange kitten" /></Link>
					<Link to="/portfolio/2" className="gallery-item"><img src={cat02} alt="Black and brown striped kitten" /></Link>
					<Link to="/portfolio/3" className="gallery-item"><img src={cat03} alt="Three kittens" /></Link>
					<Link to="/portfolio/4" className="gallery-item"><img src={cat04} alt="Orange kitten lying in the grass" /></Link>
					<Link to="/portfolio/5" className="gallery-item"><img src={cat05} alt="White kitten" /></Link>
					<Link to="/portfolio/6" className="gallery-item"><img src={cat06} alt="Four kittens sitting on the grass" /></Link>
				</div>
			</section>
		</main>
	);

};

export default PagePortfolio;
