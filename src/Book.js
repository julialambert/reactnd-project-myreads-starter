import React from "react"
import BookSelfChanger from "./BookSelfChanger"

const Book = ({ book, onHandleUpdate, onGetBookShelf }) => {
  const { imageLinks } = book
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128, height: 193, backgroundImage: `url("${
                imageLinks && imageLinks.smallThumbnail
                  ? imageLinks.smallThumbnail
                  : ''}")`
            }}>
          </div>
          <BookSelfChanger book={book}
            onHandleUpdate={onHandleUpdate}
            onGetBookShelf={onGetBookShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(', ')}
        </div>
      </div>
    </li>
  );
}

export default Book