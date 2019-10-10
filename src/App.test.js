import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new ReactAdapter() });

/**
  Factory function to create a shallow wrapper for the app component.
  @function setup
  @param {object} props - Component props specific to this setup
  @param {object} state - Initial state for setup.
  @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}


/**
  Returns ShallowWrapper containing node(s) with the given data-test value.
  @param {ShallowWrapper} warpper - Enzyme shallow wrapper to search within
  @param {string} val - Value of data-test attribute to search
  @return {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

it('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
it('renders counter display', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'counter-parent');
  expect(component.length).toBe(1);
});
it('renders increment button', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'counter-button');
  expect(component.length).toBe(1);
});
it('counter starts at 0', () => {
   const wrapper = setup();
   const initialCounterState = wrapper.state('count');
   expect(initialCounterState).toBe(0);
});
it('clicking button increments counter display', () => {
  const count = 7;
  const wrapper = setup(null, { count });
  const button = findByTestAttr(wrapper, 'counter-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(count + 1);
});
