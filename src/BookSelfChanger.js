import React from "react"

const BookSelfieChanger = ({ book, onHandleUpdate, onGetBookShelf }) => {

  const onChangeShelf = (e) => onHandleUpdate(book, e.target.value)

  const shelf = book.shelf ? book.shelf : onGetBookShelf(book)

  return (
    <div className="book-shelf-changer">
      <select onChange={onChangeShelf} value={shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookSelfieChanger