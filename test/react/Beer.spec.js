import React from 'react';
import { mount } from 'enzyme';
import Beer from '../../src/components/Beer/Beer.component';

describe('<Beer />', () => {
  it('should render current Beer with correct imgSrc', () => {
    const beer = { id: 1, name: 'beer1', image_url: 'http://aaa/1' };
    const component = mount(
      <Beer beer={beer} currentBeerId={1} onBeerClick={() => {}} />,
      { attachTo: document.body }
    );
    const img = document.querySelector('img');
    expect(img.src).to.equal('http://aaa/1');
    component.detach();
  });
});
