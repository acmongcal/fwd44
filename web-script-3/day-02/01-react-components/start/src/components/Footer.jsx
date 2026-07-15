import { getYear } from "../../utilities/utils";
function Footer({
    author
}){
    return(
        <footer>
            <p>&copy; {getYear()} {author}</p>
        </footer>
    )
}

export default Footer;