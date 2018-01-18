import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from 'react-router';

global.fetch = require('jest-fetch-mock');
global.shallow = shallow;
global.mount = mount;
global.MemoryRouter = MemoryRouter;

require('jest-localstorage-mock');

configure({adapter: new Adapter()});
