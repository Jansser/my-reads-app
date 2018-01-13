import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class BookSearch extends Component {
    static propTypes = {
        onSearchBooks: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };

    static searchTerms = [
        'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 
        'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
        'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
        'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 
        'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 
        'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 
        'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 
        'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 
        'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'];

    handleChange = (event) => {
        let query = event.target.value;

        if(query !== '') {
            this.props.onSearchBooks(query);
        }
    }

    render() {
        const { books, onUpdateBookShelf } = this.props; 

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Book Shelves</Link>

                    <div className='search-books-input-wrapper'>
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={300}
                            onChange={ this.handleChange }
                            type='text'
                            placeholder='Search by title or author'
                            list='search-terms'/>

                        <datalist id='search-terms'>
                            {BookSearch.searchTerms.map((term) => <option key={ term } value={ term }/>)}
                        </ datalist>
                    </div>
                </div>

                <div className='search-books-results'>
                    <ol className='books-grid'>
                        { books.map((book) => <Book key={book.id} book={book} onUpdateBookShelf={ onUpdateBookShelf }/>) }
                    </ol>                    
                </div>
            </div>
        )        
    }
}
export default BookSearch;