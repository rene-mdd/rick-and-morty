import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Episodes from '../episodes';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });

it('Test episodes component queries and rendering', () => {
  const component = shallow(<Episodes />);
  expect(toJson(component)).toMatchSnapshot();
});
