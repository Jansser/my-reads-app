import React, { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//TODO - See format code
class BookShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };
    
    filterShelfBooks = (value) => { 
        return this.props.books.filter( (book) => book.shelf === value );
    };

    render() {
        const shelves =  [
            { 
                title: 'Currently Reading', 
                value: 'currentlyReading', 
                books: this.filterShelfBooks('currentlyReading')
            }, 
            { 
                title: 'Want to Read', 
                value: 'wantToRead', 
                books: this.filterShelfBooks('wantToRead') 
            }, 
            { 
                title: 'Read', 
                value: 'read', 
                books: this.filterShelfBooks('read') 
            }
        ];
        
        const { onUpdateBookShelf } = this.props;

        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>My Reads App</h1>
                </div>

                <div className='list-books-content'>
                    { shelves.map( (shelf) => {
                        if(shelf.books.length > 0) {
                            return <BookShelf key={shelf.value} title={shelf.title} books={shelf.books} onUpdateBookShelf={onUpdateBookShelf}/>
                        }
                        
                        return '';
                    })}
                </div>               
                
                <div className='open-search'>
                    <Link to='/search'>Search Books</Link>
                </div>
            </div>
        )
    }
}

export default BookShelves;