import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import {DebounceInput} from 'react-debounce-input/lib/Component';
import Link from 'react-router-dom/Link';
import {testBooks} from '../utils/testUtils';

describe('Book', () => {
	let book;

	beforeAll(() => {
		book = testBooks.books[0];
	});

	it('renders without crashing', () => {
		expect(shallow(<Book book={book} />));
	});

	it('mounts correctly', () => {
		expect(
			mount(
				<MemoryRouter>
					<Book book={book} />
				</MemoryRouter>
			)
		);
	});

	it('has a control that lets you select the shelf', () => {
		const wrapper = mount(
			<MemoryRouter>
				<Book book={book} />
			</MemoryRouter>
		);

		expect(wrapper.find('select').length).toBe(1);
	});
});
