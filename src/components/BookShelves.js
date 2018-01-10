import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookShelves extends Component {
    render() {
        //TODO create array of objects with the shelves 

        return (<div>
                    <h1>My Reads App</h1>
                    <BookShelf />
                    <BookShelf />
                    <BookShelf />
                </div>
        )
    }
}

export default BookShelves;