import React from "react";
import BookList from "./BookList"

const Shelf = ({ title, books, onHandleUpdate, onGetBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onHandleUpdate={onHandleUpdate}
          onGetBookShelf={onGetBookShelf} />
      </div>
    </div>
  )
}

export default Shelf
