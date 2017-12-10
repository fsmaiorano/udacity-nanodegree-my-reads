import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import BookSearch from './BookSearch';
import * as BooksAPI from '../../Utils/BooksAPI';

import './Book.css';

class Book extends Component {

    state = {
        books: []
    };

    componentDidMount = () => {
        this.getAllBooks();
    }

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books });
        });
    }

    updateBooks = (selectedBook, shelfChange) => {
        BooksAPI.update(selectedBook, shelfChange).then(() => {
            this.getAllBooks();
        })
    }

    render() {
        const { books } = this.state;
        return (
            <div>
                <Route exact path="/" render={() => (<BookList books={books} onChange={this.updateBooks} />)} />
                <Route exact path="/search" render={({ history }) => (<BookSearch updateBookList={this.updateBooks} books={books} />)} />
            </div>
        )
    }
}

export default Book;