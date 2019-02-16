import React, { Component } from 'react';
import Header from "./Header";
import Shelf from "./Shelf";

class MyReadsPage extends Component {
  goToSearchPage = () => this.props.history.push('/search')

  render() {
    const { books } = this.props
    const currentlyReading = books.filter(b => b.shelf === 'currentlyReading')
    const wantToRead = books.filter(b => b.shelf === 'wantToRead')
    const read = books.filter(b => b.shelf === 'read')
    return (
      <div className="list-books">
        <Header />

        <div className="list-books-content">
          <div>
            <Shelf title='Currently Reading' books={currentlyReading} />
            <Shelf title='Want to read' books={wantToRead} />
            <Shelf title='Read' books={read} />
          </div>
        </div>

        <div className="open-search">
          <button onClick={this.goToSearchPage}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default MyReadsPage;