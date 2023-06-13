import Book from "./Book";
import Books from "./books.json";

const BookList = () => {
  return (
    <>
      <h1>Book List</h1>
      <div className="book-list">
        { Books && Books.books && Books.books.length > 0 && Books.books.map((book, key) => {
           return (
                <Book
                    key={key}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                    freeBookmark={book.freeBookmark}
                    img={book.img}
                />
            );

        })}
        </div>
    </>
  );
}
export default BookList;