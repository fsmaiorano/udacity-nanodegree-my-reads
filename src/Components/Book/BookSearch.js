import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import * as BooksAPI from '../../Utils/BooksAPI';

class BookSearch extends Component {

    state = {
        query: '',
        searchResults: []
    }

    onSearch = (query) => {
        this.setState({ query: query, searchResults: [] });
        if (query) {
            BooksAPI.search(query, 10).then((searchResults) => {
                if (searchResults.length > 0) {
                    const { books } = this.props;
                    searchResults = searchResults.filter((result) => (result.imageLinks))
                    searchResults.forEach((result) => {
                        if (books.length > 0) {
                            books.forEach((book) => {
                                if (book.id === result.id) {
                                    result.shelf = book.shelf;
                                }
                                else {
                                    result.shelf = 'none';
                                }
                            });
                        }
                    });
                    this.setState(() => {
                        return { searchResults: searchResults }
                    })
                }
            })
        } else {
            this.setState({ searchResults: [], query: '' })
        }
    }

    render() {
        const { query, searchResults } = this.state;
        const { books, updateBookShelf } = this.props;
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
                            this.updateBookShelf(selectedBook, shelf)
                        }} />))}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookSearch;