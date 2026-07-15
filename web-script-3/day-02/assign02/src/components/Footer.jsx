
function Footer({
    author,
    copyright
}){
    return(
        <footer>
            <p>&copy; {copyright} {author}</p>
        </footer>
    )
}

export default Footer;