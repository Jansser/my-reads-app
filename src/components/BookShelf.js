import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = props => {
	const {books, title, onUpdateBookShelf} = props;

	return (
		<div className="bookshelf">
			<div className="bookshelf-title">
				<h2>{title}</h2>
			</div>

			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map(book => (
						<li className="shelf" key={book.id}>
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
};

BookShelf.propTypes = {
	books: PropTypes.array.isRequired,
	onUpdateBookShelf: PropTypes.func.isRequired
};

export default BookShelf;
