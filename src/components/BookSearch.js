import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
    render() {
        return (
            <Link className='close-search' to='/'>Book Shelves</Link>
        )        
    }
}
export default BookSearch;