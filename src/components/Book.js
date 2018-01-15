import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {shelves, noShelf} from '../utils/commonData';

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	handleChange = event => {
		const {book, onUpdateBookShelf} = this.props;
		event.preventDefault();
		onUpdateBookShelf(book, event.target.value);
	};

	render() {
		const {book} = this.props;

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
							}}
						/>

						<div className="book-shelf-changer">
							<select value={book.shelf} onChange={this.handleChange}>
								<option value="none" disabled>
									Move to...
								</option>

								{shelves.map(shelf => (
									<option key={shelf.value} value={shelf.value}>{shelf.title}</option>
								))}

								<option value={noShelf.value}>{noShelf.title}</option>
							</select>
						</div>
					</div>

					<div className="book-title">{book.title}</div>
					<div className="book-authors">
						{book.authors ? book.authors.join(', ') : ''}
					</div>
				</div>
			</li>
		);
	}
}

export default Book;
