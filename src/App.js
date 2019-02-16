import React from 'react'
import *  as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MyReadsPage from './MyReadsPage';

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
      .catch(err =>
        alert('There was an error loading my reads. Try again later.'))
  }

  onUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      this.addBook({
        ...book,
        shelf
      })
    })
    .catch(err =>
      alert('There was an error updating my reads. Try again later.'))
  }

  addBook = (book) => {
    //TODO: addBook function
  }

  componentDidMount() {
    this.initializeApp()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => <SearchPage />} />
        <Route
          exact path='/'
          render={(props) =>
            <MyReadsPage {...props} books={this.state.books} />} />
      </div>
    )
  }
}

export default BooksApp
