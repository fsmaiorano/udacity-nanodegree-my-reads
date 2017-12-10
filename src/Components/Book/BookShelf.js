import React, { Component } from 'react'
import BookItem from './BookItem'

class BookShelf extends Component {

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