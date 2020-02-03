import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  const counterButtonComponent = shallow(<CounterButton color={mockColor} />);
  expect(counterButtonComponent.debug()).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual('red');
});
