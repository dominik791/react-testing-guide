import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import ListOfBeersContainer from '../../src/containers/ListOfBeers/ListOfBeers.container';
import ListOfBeers from '../../src/components/ListOfBeers/ListOfBeers.component';
import Beer from '../../src/components/Beer/Beer.component';

describe('<ListOfBeersContainer />', () => {

  it('calls componentDidMount once', () => {
    let spy = sinon.spy(ListOfBeersContainer.prototype, 'componentDidMount');
    const container = mount(<ListOfBeersContainer />);
    expect(spy.calledOnce).to.equal(true);
    spy.restore();
  });

  describe('when we want to check what is rendered depending on fetchStatus', () => {

    describe('and fetchStatus is equal to -1', () => {

      it('should render error div', () => {
        const rejectedPromise = Promise.reject('error');
        const fetchStub = sinon.stub(axios, 'get').callsFake(() => rejectedPromise);
        let component = mount(<ListOfBeersContainer />);
        expect(component.state('fetchStatus')).to.equal(0);
        return rejectedPromise
          .then(() => {})
          .catch(() => {
            expect(component.state('fetchStatus')).to.equal(-1);
            expect(component.html()).to.equal('<div>Fetch error</div>');
            fetchStub.restore();
          });
      });
    });

    describe('and fetchStatus is equal to 1', () => {

      it('should render ListOfBeers component', () => {
        const resolvedPromise = Promise.resolve({ data: [{ name: 'beer1' }] });
        const fetchStub = sinon.stub(axios, 'get').callsFake(() => resolvedPromise);
        let component = mount(<ListOfBeersContainer />);
        expect(component.state('fetchStatus')).to.equal(0);
        return resolvedPromise
          .then(() => {
            expect(component.state('fetchStatus')).to.equal(1);
            expect(component.find(ListOfBeers)).to.have.length(1);
            fetchStub.restore();
          });

      });

    });

    describe('and fetchStatus is equal to 0', () => {

      it('should render loading div', () => {
        let component = mount(<ListOfBeersContainer />);
        expect(component.state('fetchStatus')).to.equal(0);
        expect(component.html()).to.equal('<div>loading</div>');
      });

    });
  });

  describe('when we want to check that currentBeerId changes correctly when the beer is clicked', () => {

    it('should change currentBeerId only if current beer is clicked', () => {
      const beersData = [{ id: 0, name: 'beer1', image_url: 'aa' }, { id: 1, name: 'beer2', image_url: 'bb' }];
      const resolvedPromise = Promise.resolve({ data: beersData });
      const fetchStub = sinon.stub(axios, 'get').callsFake(() => resolvedPromise);
      let component = mount(<ListOfBeersContainer />);
      return resolvedPromise.then(() => {
        const beers = component.find(Beer);
        expect(component.state('currentBeerId')).to.equal(0);
        expect(beers).to.have.length(2);
        beers.at(0).simulate('click');
        expect(component.state('currentBeerId')).to.equal(0);
        beers.at(1).simulate('click');
        expect(component.state('currentBeerId')).to.equal(1);
        fetchStub.restore();
      });

    });
  });
});
