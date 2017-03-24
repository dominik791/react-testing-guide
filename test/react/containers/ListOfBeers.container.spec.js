import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ListOfBeersContainer from '../../../src/containers/ListOfBeers/ListOfBeers.container';
import axios from 'axios';

describe('Given an instance of ListOfBeersContainer', () => {

  describe('when we want to check what is rendered depending on fetchStatus', () => {

    describe('and fetchStatus is equal to -1', () => {

      it('should render error div', () => {
        const promise = Promise.reject('error');
        let fetchStub = sinon.stub(axios, 'get').callsFake(() => promise);
        let component = TestUtils.renderIntoDocument(<ListOfBeersContainer />);
        promise
          .then(() => {})
          .catch(() => {
            let renderedDiv = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
            expect(component.state.fetchStatus).to.equal(-1);
            expect(renderedDiv.innerText).to.equal('Fetch error');
          });
        fetchStub.restore();
      });

    });

    describe('when fetchStatus is equal to 0', () => {

      it('should render Loading component', () => {
        let component = TestUtils.renderIntoDocument(<ListOfBeersContainer />);
        let renderedDiv = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
        expect(component.state.fetchStatus).to.equal(0);
        expect(renderedDiv.innerText).to.equal('loading');
      });

    });

    describe('when fetchStatus is equal to 1', () => {

      it('should render ListOfBeers component which has listOfBeers class', () => {
        const promise = Promise.resolve({ data: [{ name: 'beer1' }] });
        let fetchStub = sinon.stub(axios, 'get').callsFake(() => promise);
        let component = TestUtils.renderIntoDocument(<ListOfBeersContainer />);
        promise.then(() => {
          let listOfBeers = TestUtils.scryRenderedDOMComponentsWithClass(component, 'listOfBeers');
          expect(component.state.fetchStatus).to.equal(1);
          expect(listOfBeers).to.have.length(1);
        });
        fetchStub.restore();
      });

    });
  });
});