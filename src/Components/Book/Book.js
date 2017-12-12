import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookList from './BookList';
import BookSearch from './BookSearch';
import * as BooksAPI from '../../Utils/BooksAPI';

import Loading from './../../Shared/Loading/Loading';
import AppBar from 'material-ui/AppBar';
import Navbar from './../../Shared/Navbar/Navbar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import './Book.css';

class Book extends Component {

    state = {
        allbooks: [],
        books: [],
        filteredBooks: [],
        showLoading: true
    };

    componentDidMount = () => {
        this.getAllBooks();
    };

    getAllBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ allbooks: books, books: books, filteredBooks: books, showLoading: false  });
        });
    };

    filterBooks = (filteredBooks) => {
        this.setState({ books: filteredBooks, filteredBooks: filteredBooks });
    };

    clearQuery = () => {
        let books = this.state.allbooks;
        this.setState({ books: books, filteredBooks: books });
    };

    updateBooks = (selectedBook, shelfChange) => {
        BooksAPI.update(selectedBook, shelfChange).then(() => {
            this.getAllBooks();
        })
    };

    render() {
        const { books, filteredBooks, allbooks, showLoading } = this.state;
        return (
            <div>
                <Loading toggleLoading={showLoading} />
                <Route exact path="/" render={({ history }) => (
                    <div>
                        <AppBar title={<Navbar books={allbooks} onFilter={this.filterBooks} />} iconElementLeft={<IconButton> </IconButton>} />
                        {filteredBooks.length !== allbooks.length && (
                            <div className='showing-filtered-books'>
                                <p>Now showing {filteredBooks.length} of {allbooks.length}</p>
                                <RaisedButton onClick={this.clearQuery} label="Reset Search" primary={true} />
                            </div>
                        )}
                        <BookList books={books} onChange={this.updateBooks} history={history} />
                    </div>
                )} />
                <Route exact path="/search" render={({ history }) => (<BookSearch onChange={this.updateBooks} books={books} history={history} />)} />
            </div>
        )
    }
}

export default Book;