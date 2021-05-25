import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Locations from '../locations';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test episodes component queries and rendering', () => {
  const component = shallow(<Locations />);
  expect(toJson(component)).toMatchSnapshot();
});
