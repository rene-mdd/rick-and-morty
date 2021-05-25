import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Character from '../character';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test character component queries and rendering', () => {
  const component = shallow(<Character />);
  expect(toJson(component)).toMatchSnapshot();
});
