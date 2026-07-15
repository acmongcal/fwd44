import { getYear } from '../utilities/dates.js';

const Footer = () => {
    return (
        <footer>
        <p>&copy; {getYear()} - Gabbie Bade</p>
        </footer>
    )
}

export default Footer;
