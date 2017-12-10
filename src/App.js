import React, { Component } from 'react';
import Book from './Components/Book/Book';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Book />
      </div>
    )
  }
}

export default App;
