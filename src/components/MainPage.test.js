import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders Mainpage without crashing', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('filters robots correctly 2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: 'John', email: 'john@example.com' }],
    searchField: 'J',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    { id: 1, name: 'John', email: 'john@example.com' }
  ]);
});

it('filters robots correctly 3', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 1, name: 'John', email: 'john@example.com' }],
    searchField: 'a',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([]);
});
