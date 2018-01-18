import React from 'react';
import ReactDOM from 'react-dom';
import BookShelves from './BookShelves';
import {testBooks} from '../utils/testUtils';
import BookShelf from './BookShelf';

describe('BookShelves', () => {
	it('renders without crashing', () => {
		expect(shallow(<BookShelves books={[]} />));
	});

	it('mounts correctly', () => {
		expect(
			mount(
				<MemoryRouter>
					<BookShelves books={[]} onUpdateBookShelf={() => {}} />
				</MemoryRouter>
			)
		);
	});

	it('renders three <BookShelf /> components', () => {
		fetch.mockResponse(JSON.stringify(testBooks));

		const wrapper = mount(
			<MemoryRouter>
				<BookShelves books={testBooks.books} onUpdateBookShelf={() => {}} />
			</MemoryRouter>
		);
		expect(wrapper.find(BookShelf).length).toBe(3);
	});
});
