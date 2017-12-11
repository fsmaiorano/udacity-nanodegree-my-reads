import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import * as BooksAPI from '../../Utils/BooksAPI';

import Snackbar from 'material-ui/Snackbar';
class BookSearch extends Component {

    state = {
        query: '',
        searchResults: [],
        showPopup: false
    };

    onSearch = (query) => {
        this.setState({ query: query, searchResults: [] });
        if (query) {
            BooksAPI.search(query, 10).then((searchResults) => {
                if (searchResults.length > 0) {
                    searchResults = this.organizeShelfs(searchResults);
                    this.setState({ searchResults: searchResults });
                }
            })
        } else {
            this.setState({ searchResults: [], query: '' })
        }
    };

    organizeShelfs = (searchResults) => {
        searchResults = searchResults.filter((result) => (result.imageLinks))
        const { books } = this.props;
        searchResults.forEach((result) => {
            if (books.length > 0) {
                result.shelf = 'none';
                books.forEach((book) => {
                    if (book.id === result.id) {
                        result.shelf = book.shelf;
                    }
                });
            }
        });
        return searchResults;
    };

    render() {
        const { query, searchResults } = this.state;
        const { onChange, history } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close </Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.onSearch(event.target.value)} value={query} />

                    </div>
                </div>
                <div className="search-books-results">
                    <div className="books-grid">
                        {query.length > 0 && searchResults.map((selectedBook, index) => (<BookItem book={selectedBook} key={index} updateBookShelf={(shelf) => {
                            onChange(selectedBook, shelf)
                            this.setState({ showPopup: true })
                            history.push('/');
                        }} />))}
                    </div>
                </div>
                <Snackbar
                    open={this.state.showPopup}
                    message="The selected book was add on your library"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

export default BookSearch;