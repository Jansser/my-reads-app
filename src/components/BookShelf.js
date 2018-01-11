import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
    render() {
        const { books } = this.props;

        return (
            <div className='bookshelf'>
                <div className='bookshelf-title'>
                    <h2>{this.props.title}</h2>
                </div>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        { books.map((book) => <Book key={book.id} book={book}/>)}
                    </ol>                    
                </div>                
            </div>

        ) 
    }
}

export default BookShelf;