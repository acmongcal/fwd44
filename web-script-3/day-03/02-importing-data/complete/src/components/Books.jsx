import bookList from '../data/bookList.js';
import Book from './Book';

function Books() {
    return (
        <div className="books-container">
            {bookList.map((book, i) => {
                return (
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        published={book.published}
                        rating={book.rating}
                        cover={book.cover}
                    />
                )
            })}
        </div>
    )
}

export default Books;
