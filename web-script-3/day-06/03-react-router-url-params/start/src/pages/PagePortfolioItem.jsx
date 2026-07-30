// Page - Portfolio
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../scss/gallery.scss';
import { appTitle } from '../globals/globals';
import cat01 from '../images/kittens-01.jpg';
import cat02 from '../images/kittens-02.jpg';
import cat03 from '../images/kittens-03.jpg';
import cat04 from '../images/kittens-04.jpg';
import cat05 from '../images/kittens-05.jpg';
import cat06 from '../images/kittens-06.jpg';

const PagePortfolioItem = () => {

    let id  = 1;

    useEffect(() => {
        document.title = `${appTitle} - Portfolio Item ${id}`;
    }, []);

    // Make sure id is a whole number between 1 and 6 (inclusive)
    // ...If is not...then send them back to the Portfolio page
    if(isNaN(id) || (id % 1 !== 0) || (id < 1 || id > 6)){
        return (
            <Navigate to="/portfolio" replace={true} />
        );
    }

    id = id*1;

    let img;

    switch(id) {
        case 2:
            img = <div className="gallery-item"><img src={cat02} alt="Black and brown striped kitten" /></div>;
            break;
        case 3:
            img = <div className="gallery-item"><img src={cat03} alt="Three kittens" /></div>;
            break;
        case 4:
            img = <div className="gallery-item"><img src={cat04} alt="Orange kitten lying in the grass" /></div>;
            break;
        case 5:
            img = <div className="gallery-item"><img src={cat05} alt="White kitten" /></div>;
            break;
        case 6:
            img = <div className="gallery-item"><img src={cat06} alt="Four kittens sitting on the grass" /></div>
            break;
        default:
            img = <div className="gallery-item"><img src={cat01} alt="Orange kitten" /></div>;
    }

    return (
        <main>
            <section className="portfolio-item-section">
                <h2>Portfolio Item {id}</h2>
                <div className="gallery-single-item">
                    {img}    
                </div>
                <Link to="/portfolio" className="link-back-to-portfolio">Back to Portfolio Page</Link>
            </section>
        </main>
    );

}
    
export default PagePortfolioItem;