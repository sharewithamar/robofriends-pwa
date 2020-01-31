import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card List component', () => {
  const mockRobots = [
    { id: 1, name: 'Jon Snow', username: 'JonJon', email: 'jonsnow@gmail.com' }
  ];
  const cardComponent = shallow(<CardList robots={mockRobots} />);
  expect(cardComponent.debug()).toMatchSnapshot();
});
