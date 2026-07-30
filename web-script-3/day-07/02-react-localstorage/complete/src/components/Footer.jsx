import { getYear } from '../utilities/getDates';

const Footer = ({ copyright='Awesome Corp', author=getYear() }) => (
	<footer>
        <p>&copy; {copyright} {author}</p>
    </footer>
);

export default Footer;