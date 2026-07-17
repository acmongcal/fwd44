function Book({ cover, title, author, published, rating }) {
    return (
        <div className="book">
            <div className="book-cover">
                <img src={cover} alt={title} />
            </div>
            <div className="book-info">
                <ul>
                    <li><b>Title: </b>{title}</li>
                    <li><b>Author: </b>{author}</li>
                    <li><b>Published: </b>{published}</li>
                    <li><b>Rating: </b>{rating}</li>
                </ul>
            </div>
        </div>
    );
}

export default Book;
