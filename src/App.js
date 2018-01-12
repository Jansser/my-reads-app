import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelves from './components/BookShelves';
import BookSearch from './components/BookSearch';

import Loader from 'react-loaders';

class App extends Component {
  state = {
    books: [],
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ 
        books, 
        loading: false 
      })
    })
  }

  render() {
    const { loading, books } = this.state;
    return (
      <div className='app'>
        <Route exact path='/' render={() => (<BookShelves books={books} />)} />
        <Route exact path='/search' render={() => (<BookSearch />)} />
        <Loader type="pacman" active={loading} />
      </div>
    );
  }
}

export default App;
