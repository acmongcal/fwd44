import { getYear } from '../utilities/dates.js';

const Footer = ({ copyright, author }) => {
    return (
        <footer>
            <p>&copy; {copyright} - {author}</p>
        </footer>
    )
}

export default Footer;
