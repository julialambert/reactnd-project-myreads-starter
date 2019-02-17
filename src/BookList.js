import React from 'react'
import Book from './Book'

const BookList = ({ books, onHandleUpdate, onGetBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book key={book.id} book={book}
          onHandleUpdate={onHandleUpdate}
          onGetBookShelf={onGetBookShelf} />
      ))}
    </ol>
  );
};

export default BookList