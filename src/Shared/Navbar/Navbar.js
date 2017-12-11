import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

    toggleSearch = () => {
        let searchInput = document.getElementsByClassName('search')[0];
        searchInput.classList.contains('expanded') ? searchInput.classList.remove("expanded") : searchInput.classList.add("expanded");
    }

    render() {

        return (
            <div>
                <span className='title'>MyReads</span>
                <input className="search" type="search" placeholder="Search" />
                <div className="icon" onClick={this.toggleSearch}></div>
            </div>
        )
    }

}

export default Navbar;