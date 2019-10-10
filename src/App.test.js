import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new ReactAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const component = wrapper.find("[data-test='component-app']");
  expect(component.length).toBe(1);
});

it('renders increment button', () => {

});
it('renders counter display', () => {

});
it('counter starts at 0', () => {

});
it('clicking button increments counter display', () => {

});
