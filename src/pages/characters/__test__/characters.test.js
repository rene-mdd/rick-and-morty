import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Characters from '../characters';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test component queries and rendering', () => {
  const component = shallow(<Characters />);
  expect(toJson(component)).toMatchSnapshot();
});
