import React from 'react';
import { mount, shallow, render } from 'enzyme';
import ListOfBeers from '../../src/components/ListOfBeers/ListOfBeers.component';
import Beer from '../../src/components/Beer/Beer.component';

describe('<ListOfBeers />', () => {

  describe('when you use mount()', () => {

    it('renders correct number of Beers', () => {
      const beers = [{ id: 1, name: 'beer1', imgSrc: 'aa' }, { id: 2, name: 'beer2', imgSrc: 'bb' }];
      const component = mount(<ListOfBeers beers={beers} currentBeerId={1} onBeerClick={() => {}} />);
      const nbOfBeers = component.find(Beer).length;
      expect(nbOfBeers).to.equal(2);
    });

  });

  describe('when you use render()', () => {

    it('renders correct number of Beers', () => {
      const beers = [{ id: 1, name: 'beer1', imgSrc: 'aa' }, { id: 2, name: 'beer2', imgSrc: 'bb' }];
      const component = render(<ListOfBeers beers={beers} currentBeerId={1} onBeerClick={() => {}} />);
      const nbOfBeers = component.find('.Beer').length;
      expect(nbOfBeers).to.equal(2);
    });

  });

  describe('when you use shallow()', () => {

    describe('and where are no beers', () => {

      it('should render empty div', () => {
        const component = shallow(<ListOfBeers beers={[]} currentBeerId={0} onBeerClick={() => {}}/>);
        expect(component.html()).to.equal('<div></div>');
      });

    });

    describe('and there are some beers', () => {

      it('should render beers', () => {
        const beers = [{ id: 1, name: 'beer1', imgSrc: 'aa' }, { id: 2, name: 'beer2', imgSrc: 'bb' }];
        const component = shallow(<ListOfBeers beers={beers} currentBeerId={0} onBeerClick={() => {}}/>);
        const nbOfBeers = component.find(Beer).length;
        expect(nbOfBeers).to.equal(2);
      });

    });
  });
});
