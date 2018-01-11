import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelves from './components/BookShelves';
import BookSearch from './components/BookSearch';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (<BookShelves books={this.state.books} />)} />
        <Route exact path='/search' render={() => (<BookSearch />)} />
      </div>
    );
  }
}

export default App;
