import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ListOfBeers from '../../../src/components/ListOfBeers/ListOfBeers.component';
import Beer from '../../../src/components/Beer/Beer.component';

describe('given an instance of ListOfBeers component', () => {

  describe('when there are no beers', () => {

    const beers = [];
    let shallowRenderedComponent;

    before(() => {
      let renderer = TestUtils.createRenderer();
      renderer.render(<ListOfBeers beers={beers} />);
      shallowRenderedComponent = renderer.getRenderOutput();
    });

    it('should return empty div', () => {
      expect(shallowRenderedComponent.type).to.equal('div');
      expect(shallowRenderedComponent.props.children).to.be.empty;
    });

  });

  describe('when there are some beers', () => {

    const beers = [{ name: '1beer' }, { name: '2beer' }];
    const onBeerClick = () => {};
    let shallowRenderedComponent;

    before(() => {
      let renderer = TestUtils.createRenderer();
      renderer.render(<ListOfBeers beers={beers} currentBeerId={1} onBeerClick={onBeerClick} />);
      shallowRenderedComponent = renderer.getRenderOutput();
    });

    it('should return 2 spans inside div', () => {
      expect(shallowRenderedComponent.type).to.equal('div');
      expect(shallowRenderedComponent.props.children).to.have.length(2);
      expect(shallowRenderedComponent.props.children[0].type).to.equal('span');
      expect(shallowRenderedComponent.props.children[1].type).to.equal('span');
    });

    it('and each span should include one Beer with correct props', () => {
      const firstBeer = shallowRenderedComponent.props.children[0].props.children;
      const secondBeer = shallowRenderedComponent.props.children[1].props.children;
      expect(firstBeer).to.eql(<Beer beer={beers[0]} currentBeerId={1} onBeerClick={onBeerClick} />);
      expect(secondBeer).to.eql(<Beer beer={beers[1]} currentBeerId={1} onBeerClick={onBeerClick} />);
    });

  });
});
