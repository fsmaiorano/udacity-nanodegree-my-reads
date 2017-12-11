import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import BookSearch from './BookSearch';
import * as BooksAPI from '../../Utils/BooksAPI';

import AppBar from 'material-ui/AppBar';
import Navbar from './../../Shared/Navbar/Navbar';

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
                <Route exact path="/" render={({ history }) => (
                    <div>
                        <AppBar title={<Navbar />} iconClassNameRight="muidocs-icon-navigation-expand-more" books={books} />
                        <BookList books={books} onChange={this.updateBooks} history={history} />
                    </div>
                )} />
                <Route exact path="/search" render={({ history }) => (<BookSearch onChange={this.updateBooks} books={books} history={history} />)} />
            </div>
        )
    }
}

export default Book;