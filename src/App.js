import React from 'react'
import *  as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import MyReadsPage from './MyReadsPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  initializeApp = () => {
    BooksAPI.getAll()
      .then(books => {
        console.log(books)
        this.setState({ books })
      })
      .catch(() =>
        alert('There was an error loading my reads. Try again later.'))
  }

  handleUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.addBook({
          ...book,
          shelf
        })
      })
      .catch(() =>
        alert('There was an error updating my reads. Try again later.'))
  }

  addBook = (book) => {
    const newBooks = this.state.books.filter(b => b.id !== book.id)
    this.setState(book.shelf !== 'none'
      ? { books: [...newBooks, book] }
      : { books: newBooks })
  }

  getBookShelf = (book) => {
    const foundBook = this.state.books.find(b => b.id === book.id)
    return foundBook ? foundBook.shelf : 'none'
  }

  componentDidMount() {
    this.initializeApp()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>
          <SearchPage onHandleUpdate={this.handleUpdate}
            onGetBookShelf={this.getBookShelf} />} />
        <Route
          exact path='/'
          render={(props) =>
            <MyReadsPage {...props} books={this.state.books}
              onHandleUpdate={this.handleUpdate}
              onGetBookShelf={this.getBookShelf} />} />
      </div>
    )
  }
}

export default BooksApp
