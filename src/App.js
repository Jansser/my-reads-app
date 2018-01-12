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
    //TODO - Error callback
    BooksAPI.getAll().then((books) => 
    
      this.setState({ 
        books, 
        loading: false 
      }));
  }

  //TODO - See automatic format code
  
  /*
   * Updates the Book shelf
   */
  updateBookShelf = (book, shelf) => {
    this.setState( { loading: true } );

    BooksAPI.update(book, shelf).then( (response) => {
      book.shelf = shelf;
      
      this.setState(state => ({ 
        books: state.books,
        loading: false 
      }));
    }, (error) => {
      //TODO - SHOW SOME NICE ERROR ALERT
      console.log('error');
    })
  }

  render() {
    const { loading, books } = this.state;

    return (
      <div className='app'>
        <Route exact path='/' render={() => (<BookShelves books={books} onUpdateBookShelf={ this.updateBookShelf }/>)} />
        <Route exact path='/search' render={() => (<BookSearch />)} />
        <Loader type="pacman" active={loading} />
      </div>
    );
  }
}

export default App;
