import React, {Component} from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {shelves} from '../utils/commonData';

class BookShelves extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	filterShelfBooks = value => {
		return this.props.books.filter(book => book.shelf === value);
	};

	render() {
		const {onUpdateBookShelf} = this.props;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>My Reads App</h1>
				</div>

				<div className="list-books-content">
					{shelves.map(shelf => {
						return (
							<BookShelf
								key={shelf.value}
								title={shelf.title}
								books={this.filterShelfBooks(shelf.value)}
								onUpdateBookShelf={onUpdateBookShelf}
							/>
						);
					})}
				</div>

				<div className="open-search">
					<Link to="/search">Search Books</Link>
				</div>
			</div>
		);
	}
}

export default BookShelves;
