import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import BookShelf from './BookShelf';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    }

    goSearch = () => {
        this.props.history.push('/search');
    }

    render() {
        const { books, onChange } = this.props;
        return (
            <div>
                <List>
                    <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" updateBookList={onChange} />
                    <Divider />
                    <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to read" updateBookList={onChange} />
                    <Divider />
                    <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" updateBookList={onChange} />
                </List>
                <FloatingActionButton className='open-search' onClick={this.goSearch}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default BookList;