import React from 'react';
import ReactDOM from 'react-dom';
import BookSearch from './BookSearch';
import { DebounceInput } from 'react-debounce-input/lib/Component';
import Link from 'react-router-dom/Link';

describe('BookSearch', () => {
	it('renders without crashing', () => {
		expect(shallow(<BookSearch />));
	});

	it('mounts correctly', () => {
		expect(
			mount(
				<MemoryRouter>
					<BookSearch />
				</MemoryRouter>
			)
		);
    });
    
    it('has a text input', () => {
        const wrapper = mount(<MemoryRouter><BookSearch /></MemoryRouter>);

        expect(wrapper.find('input').length).toBe(1);
    });
});
