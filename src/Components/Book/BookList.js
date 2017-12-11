import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import BookShelf from './BookShelf';

class BookList extends Component {

    goSearch = () => {
        this.props.history.push('/search');
    }

    render() {
        const { books, onChange } = this.props;
        return (
            <div className="list-books">

                <div className="list-books-content">
                    <div>
                        <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" updateBookList={onChange} />
                        <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to read" updateBookList={onChange} />
                        <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" updateBookList={onChange} />
                    </div>
                </div>
                <FloatingActionButton className='open-search' onClick={this.goSearch}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default BookList;