import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Episode from '../episode';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test episode component queries and rendering', () => {
  const component = shallow(<Episode />);
  expect(toJson(component)).toMatchSnapshot();
});
