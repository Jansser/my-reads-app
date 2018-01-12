import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };

    render() {
        const { books, onUpdateBookShelf } = this.props;

        return (
            <div className='bookshelf'>
                <div className='bookshelf-title'>
                    <h2>{this.props.title}</h2>
                </div>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        { books.map((book) => <Book key={book.id} book={book} onUpdateBookShelf={ onUpdateBookShelf }/>)}
                    </ol>                    
                </div>                
            </div>

        ) 
    }
}

export default BookShelf;