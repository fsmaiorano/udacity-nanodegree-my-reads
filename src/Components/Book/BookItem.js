import React, { Component } from 'react'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class BookItem extends Component {

    changeShelf = (event, value) => {
        this.props.updateBookShelf(value);
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
                        <div className="book-shelf-changer">
                        <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onChange={this.changeShelf} value={book.shelf}
    >
      <MenuItem value="" primaryText="Move to..." disabled />
      <MenuItem value="currentlyReading" primaryText="Currently Reading" onItemClick="currentlyReading" />
      <MenuItem value="wantToRead" primaryText="Want to Read" />
      <MenuItem value="read" primaryText="Read" />
      <MenuItem value="none" primaryText="None" />
    </IconMenu>
                            {/* <select onChange={this.changeShelf} value={book.shelf}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select> */}
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