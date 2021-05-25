import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test if App component is rendering', () => {
  const component = shallow(<App />);
  expect(component.contains(<App />)).toBe(false);
});
