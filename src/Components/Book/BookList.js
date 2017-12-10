import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

class BookList extends Component {
    render() {
        const { books, onChange } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" updateBookList={onChange} />
                        <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to read" updateBookList={onChange} />
                        <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" updateBookList={onChange} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList;