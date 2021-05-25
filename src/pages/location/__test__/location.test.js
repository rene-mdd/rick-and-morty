import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Location from '../location';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test location component queries and rendering', () => {
  const component = shallow(<Location />);
  expect(toJson(component)).toMatchSnapshot();
});
