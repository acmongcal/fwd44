import { getYear } from '../utilities/utilities';

const Footer = () => (
    <footer>
        <p>&copy; {getYear()} BCIT</p>
    </footer>
);

export default Footer;