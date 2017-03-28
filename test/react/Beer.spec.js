import React from 'react';
import { shallow } from 'enzyme';
import Beer from '../../src/components/Beer/Beer.component';

describe.only('<Beer />', () => {

  const beer1 = { name: 'beer1', id: 1, image_url: 'aaa' };
  const func = () => {};
  const component = shallow(<Beer beer={beer1} currentBeerId={1} onBeerClick={func}/>);
  const component2 = shallow(<Beer beer={beer1} currentBeerId={5} onBeerClick={func}/>);

  it('renders inner div properly', () => {
    const outerDiv = component.find('div').at(1);
    expect(outerDiv.html()).to.equal('<div>beer1</div>');
  });

  it('renders img properly', () => {
    const img = component.find('img');
    expect(img.prop('src')).to.equal('aaa');
    expect(img.prop('width')).to.equal(80);
    expect(img.prop('height')).to.equal('auto');
  });

  it('renders outer div properly when beer is current', () => {
    const outerDiv = component.find('div').at(0);
    const expectedStyle = {
      width: '80px',
      display: 'inline-block',
      marginRight: '30px',
      background: 'red'
    };
    expect(outerDiv.children()).to.have.length(2);
    expect(outerDiv.prop('style')).to.eql(expectedStyle);
  });

  it('renders outer div properly when beer is not current', () => {
    const outerDiv = component2.find('div').at(0);
    const expectedStyle = {
      width: '80px',
      display: 'inline-block',
      marginRight: '30px',
      background: 'none'
    };
    expect(outerDiv.children()).to.have.length(2);
    expect(outerDiv.prop('style')).to.eql(expectedStyle);
  });

});
