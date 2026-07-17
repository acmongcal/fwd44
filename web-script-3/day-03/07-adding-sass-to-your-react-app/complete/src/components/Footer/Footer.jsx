import { getYear } from '../../utilities/utilities';
import './Footer.scss';

const Footer = () => (
    <footer>
        <p>&copy; {getYear()} BCIT</p>
    </footer>
);

export default Footer;