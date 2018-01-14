import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelves from './components/BookShelves';
import BookSearch from './components/BookSearch';

import Loader from 'react-loaders';

class App extends Component {
	state = {
		books: [],
		query: '',
		loading: true
	};

	componentDidMount() {
		BooksAPI.getAll().then(books =>
			this.setState({
				books,
				loading: false
			})
		);
	}

	/*
   * Updates the Book shelf
   */
	updateBookShelf = (book, shelf) => {
		this.setState({loading: true});

		BooksAPI.update(book, shelf).then(
			response => {
				book.shelf = shelf;

				BooksAPI.getAll().then(books =>
					this.setState({
						books,
						loading: false
					})
				);
			},
			error => {}
		);
	};

	searchBooks = query => {
		this.setState({loading: true});

		BooksAPI.search(query).then(
			response => {
				if (response.length) {
					this.setState({books: response, loading: false});
				} else {
					this.setState({loading: false});
				}
			},
			error => {
				this.setState({loading: false});
			}
		);
	};

	render() {
		const {loading, books} = this.state;

		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<BookShelves
							books={books}
							onUpdateBookShelf={this.updateBookShelf}
						/>
					)}
				/>
				<Route
					exact
					path="/search"
					render={() => (
						<BookSearch
							onSearchBooks={this.searchBooks}
							books={books}
							onUpdateBookShelf={this.updateBookShelf}
						/>
					)}
				/>
				<Loader type="pacman" active={loading} />
			</div>
		);
	}
}

export default App;
