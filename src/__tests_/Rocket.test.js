import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import TestRender from 'react-test-renderer';
import DisplayRocket from '../components/rockets/DisplayRockets';
import Rocket from '../components/rockets/DisplayRockets';

describe('Test DisplayRocket ', () => {
  it('Test DisplayRocket component ', () => {
    const component = TestRender.create(
      <Provider store={store}>
        <DisplayRocket />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Test Rocket ', () => {
  it('Test Rocket component ', () => {
    const component = TestRender.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});