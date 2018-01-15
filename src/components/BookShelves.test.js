import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import BookShelves from './BookShelves';

describe('BookShelves', () => {
	it('renders without crashing', () => {
        expect(shallow(<BookShelves books={[]} />));
	});
});
