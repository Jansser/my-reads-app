import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };
 
    handleChange = (event) => {
        const { book, onUpdateBookShelf } = this.props;
        event.preventDefault();
        onUpdateBookShelf(book, event.target.value);
    }

    render() {
        const { book } = this.props;

        //TODO options on the select are the shelves. It's a commmon data. (DRY)
        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail   }")` }}>
                        </div>

                        <div className="book-shelf-changer">
                            <select value={ book.shelf } onChange={ this.handleChange }>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>

                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className='book-title'>{book.title}</div>
                    <div className='book-authors'>{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book;