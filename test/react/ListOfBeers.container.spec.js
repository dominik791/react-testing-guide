import React from 'react';
import { mount } from 'enzyme';
import ListOfBeersContainer from '../../src/containers/ListOfBeers/ListOfBeers.container';

describe('<ListOfBeersContainer />', () => {
  it('calls componentDidMount once', () => {
    let spy = sinon.spy(ListOfBeersContainer.prototype, 'componentDidMount');
    const container = mount(<ListOfBeersContainer />);
    expect(spy.calledOnce).to.equal(true);
    spy.restore();
  });
});
