import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MemoryRouter} from 'react-router';
import {shallow, mount} from 'enzyme';
import BookShelves from './components/BookShelves';
import BookShelf from './components/BookShelf';
import {testBooks} from './utils/testUtils';

describe('App', () => {
	it('renders without crashing', () => {
		expect(
			shallow(
				<MemoryRouter>
					<App />
				</MemoryRouter>
			)
		);
	});

	it('renders one <BookShelves />', () => {
		fetch.mockResponse(JSON.stringify(testBooks));

		const wrapper = mount(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(wrapper.find(BookShelves).length).toBe(1);
	});
});
