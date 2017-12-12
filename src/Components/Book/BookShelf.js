import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import BookItem from './BookItem'

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookList: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { books, title, updateBookList } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map((book, index) => (<BookItem book={book} key={index} updateBookShelf={(shelf) => {
                        updateBookList(book, shelf)
                      }}/>))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;