import React, { Component } from "react";
import BookList from "./BookList";
import SearchBar from "./SearchBar";
import *  as BooksAPI from './BooksAPI'

class SearchPage extends Component {
  state = {
    searchBooks: [],
    noResults: false
  }

  onSearch = async (query) => {
    if (query) {
      const resp = await BooksAPI.search(query);
      if (resp instanceof Array) {
        this.setState({ searchBooks: resp, noResults: false })
      } else {
        this.setState({ noResults: true })
      }
    } else {
      this.setState({ searchBooks: [], noResults: true })
    }
  };

  render() {
    return (
      <div className="search-books">
        <SearchBar onHandleSearch={this.onSearch} />
        <div className="search-books-results">
          {
            this.state.noResults || this.state.searchBooks.length === 0
              ? <p>No Results.</p>
              : <BookList books={this.state.searchBooks} />
          }
        </div>
      </div>
    );
  }
}

export default SearchPage;