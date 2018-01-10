import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<MemoryRouter><App /></MemoryRouter>);
});
