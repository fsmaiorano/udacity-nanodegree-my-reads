import React, { Component } from 'react'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class BookItem extends Component {

    changeShelf = (event, value) => {
        this.props.updateBookShelf(value);
    }

    verifiyBookExists = (book) => {
        if(book.shelf === 'none'){
            return 'book-shelf-changer';
        }
        else{
            return 'book-shelf-changer-exists';
        }
    }

    render() {
        const { book } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks.thumbnail}")`
                        }}></div>
                        <div className={this.verifiyBookExists(book)}>
                            <IconMenu
                                iconButtonElement={<IconButton></IconButton>}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                                onChange={this.changeShelf} value={book.shelf}
                            >
                                <MenuItem value="" primaryText="Move to..." disabled />
                                <MenuItem value="currentlyReading" primaryText="Currently Reading" onItemClick="currentlyReading" />
                                <MenuItem value="wantToRead" primaryText="Want to Read" />
                                <MenuItem value="read" primaryText="Read" />
                                <MenuItem value="none" primaryText="None" />
                            </IconMenu>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}


export default BookItem;