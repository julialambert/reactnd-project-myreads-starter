import React, { Component } from "react";
import { Link } from 'react-router-dom'
import * as _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };

    this.callOnHandleSearch = _.debounce(this.callOnHandleSearch, 500);
  }

  callOnHandleSearch = () =>
    this.props.onHandleSearch(this.state.searchText.trim());

  handleChange = (e) => {
    this.setState({ searchText: e.target.value },
      () => this.callOnHandleSearch()); //callback
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to='/' />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.searchText}
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default SearchBar;