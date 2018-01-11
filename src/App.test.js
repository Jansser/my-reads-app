import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import BookShelves from './components/BookShelves';


const BooksAPI = {
  getAll: jest.fn().mockImplementation( getAll => [] ) 
}

it('renders without crashing', () => {
  expect(shallow(<MemoryRouter><App /></MemoryRouter>));
});

it('renders <BookShelves />', () => {
  BooksAPI.getAll.mockImplementation(getAll => {[]});

  const wrapper = mount(<MemoryRouter><App /></MemoryRouter>);
  
  expect(wrapper.find(BookShelves).length).toBe(1);
});