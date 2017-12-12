import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import './Navbar.css';

class Navbar extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onFilter: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    toggleSearch = () => {
        let searchInput = document.getElementsByClassName('search')[0];
        searchInput.classList.contains('expanded') ? searchInput.classList.remove("expanded") : searchInput.classList.add("expanded");
    }

    onSearch = (query) => {
        this.setState({ query: query });
        let books = this.props.books;
        let filteredBooks = books.filter(book => book.title.toLowerCase().indexOf(query) !== -1);
        this.props.onFilter(filteredBooks);
    }

    render() {
        const { query } = this.state;
        return (
            <div>
                <span className='title'>My Reads</span>
                <input className="search" type="search" placeholder="Search" onChange={(event) => this.onSearch(event.target.value)} value={query} />
                <div className="icon" onClick={this.toggleSearch}></div>
            </div>
        )
    }

}

export default Navbar;