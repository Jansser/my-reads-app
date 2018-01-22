import React, {Component} from 'react';
import {DebounceInput} from 'react-debounce-input';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';
import {search} from '../utils/BooksAPI';
import {searchTerms} from '../utils/commonData';

class BookSearch extends Component {
	static propTypes = {
		onUpdateBookShelf: PropTypes.func.isRequired,
		setBookShelf: PropTypes.func.isRequired
	};

	state = {
		query: '',
		books: [],
		resultsNotFound: false
	};

	search = () => {
		const {toggleLoading, setBookShelf} = this.props;
		const {query} = this.state;

		this.setState({books: [], resultsNotFound: false});
		toggleLoading();

		search(query).then(
			response => {
				if (response.length) {
					let books = response;

					for (let book of response) {
						setBookShelf(book);
					}

					this.setState({books});
				} else {
					this.setState({books: [], resultsNotFound: true});
				}

				toggleLoading();
			},
			error => {
				this.setState({books: [], resultsNotFound: true});
				toggleLoading();
			}
		);
	};

	handleChange = event => {
		this.setState({query: event.target.value});

		if (this.state.query !== '') {
			this.search();
		}
	};

	render() {
		const {onUpdateBookShelf} = this.props;
		const {books, query, resultsNotFound} = this.state;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Book Shelves
					</Link>

					<div className="search-books-input-wrapper">
						<DebounceInput
							minLength={2}
							debounceTimeout={300}
							onChange={this.handleChange}
							type="text"
							placeholder="Search by title or author"
							list="search-terms"
							autoFocus
						/>

						<datalist id="search-terms">
							{searchTerms.map(term => <option key={term} value={term} />)}
						</datalist>
					</div>
				</div>

				<div className="search-books-results">
					{resultsNotFound === true && (
						<p className="warning message">
							No results found for: <strong>{query}</strong>
						</p>
					)}

					<ol className="books-grid">
						{books.map(book => (
							<li key={book.id}>
								<Book
									key={book.id}
									book={book}
									onUpdateBookShelf={onUpdateBookShelf}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}
export default BookSearch;
