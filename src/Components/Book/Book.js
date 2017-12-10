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


    render() {
        const {books} = this.state;
        return (
            <div>
                <Route exact path="/" render={() => (<BookList books={books} onChange={this.update_books_details} />)} />
                <Route exact path="/search" render={({ history }) => (<BookSearch onChange={this.update_books_details} books={books} />)} />
            </div>
        )
    }
}

export default Book;