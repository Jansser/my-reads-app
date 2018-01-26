import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookShelves from './components/BookShelves';
import BookSearch from './components/BookSearch';
import {noShelf} from './utils/commonData';
import Loader from 'react-loaders';

class App extends Component {
	state = {
		books: [],
		loading: false
	};

	componentDidMount() {
		this.toggleLoading();

		BooksAPI.getAll().then(books => {
			this.setState({books});
			this.toggleLoading();
		});
	}

	updateBookShelf = (book, shelf, rate) => {
		this.toggleLoading();

		BooksAPI.update(book, shelf).then(
			response => {
				book.shelf = shelf;

				BooksAPI.getAll().then(books => {
					this.toggleLoading();
				});
			},
			error => {
				this.toggleLoading();
			}
		);
	};

	toggleLoading = () => {
		this.setState(prevState => ({loading: !prevState.loading}));
	};

	setBookShelf = book => {
		const {books} = this.state;
		const id = book.id;

		let myBook = books.find(book => book.id === id);

		if (myBook) {
			book.shelf = myBook.shelf;
		} else {
			book.shelf = noShelf.value;
		}
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
							onUpdateBookShelf={this.updateBookShelf}
							toggleLoading={this.toggleLoading}
							setBookShelf={this.setBookShelf}
						/>
					)}
				/>
				<Loader type="pacman" active={loading} />
			</div>
		);
	}
}

export default App;
