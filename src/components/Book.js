import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import {shelves, noShelf} from '../utils/commonData';
import {getRating, updateRate} from '../utils/BooksAPI';
import noBookCover from '../images/no_book_cover.png';

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onUpdateBookShelf: PropTypes.func.isRequired
	};

	state = {
		rate: 0
	};

	componentDidMount() {
		let {book} = this.props;
		const rate = getRating(book);
		this.setState({rate});
	}

	handleChange = event => {
		const {book, onUpdateBookShelf} = this.props;
		event.preventDefault();
		onUpdateBookShelf(book, event.target.value);
	};

	handleRateChange = rate => {
		const {book} = this.props;
		updateRate(book, rate);
		this.setState({rate});
	};

	render() {
		const {book} = this.props;
		const {rate} = this.state;
		const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : noBookCover;

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${thumbnail}")`
						}}
					>
						<div className="book-star-rating">
							<StarRatingComponent
								name={`rate-${book.id}`}
								value={rate}
								onStarClick={this.handleRateChange}
								emptyStarColor={'silver'}
							/>
						</div>
					</div>

					<div className="book-shelf-changer">
						<select value={book.shelf} onChange={this.handleChange}>
							<option value="none" disabled>
								Move to...
							</option>

							{shelves.map(shelf => (
								<option key={shelf.value} value={shelf.value}>
									{shelf.title}
								</option>
							))}

							<option value={noShelf.value}>{noShelf.title}</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default Book;
