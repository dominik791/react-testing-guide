import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Beer from '../../../src/components/Beer/Beer.component';

describe.only('Given an instance of Beer component', () => {

  const onBeerClick = () => {};
  const beer1 = { name: 'beer1', id: 1, image_url: 'aaa' };
  const beer2 = { name: 'beer2', id: 2, image_url: 'bbb' };
  let shallowRenderedComponent;
  let img;
  let innerDiv;

  before(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Beer beer={beer1} currentBeerId={1} onBeerClick={onBeerClick} />);
    shallowRenderedComponent = renderer.getRenderOutput();
    img = shallowRenderedComponent.props.children[0];
    innerDiv = shallowRenderedComponent.props.children[1];
  });

  it('renders outer div properly', () => {
    expect(shallowRenderedComponent.type).to.equal('div');
    expect(shallowRenderedComponent.props.onClick).to.be.func;
  });

  it('renders img properly', () => {
    expect(img.type).to.equal('img');
    expect(img.props.width).to.equal(80);
    expect(img.props.height).to.equal('auto');
    expect(img.props.src).to.equal('aaa');
  });

  it('renders innerDiv properly', () => {
    expect(innerDiv.type).to.equal('div');
    expect(innerDiv.props.children).to.equal('beer1');
  });

  it('renders styles of outer div properly when is current beer', () => {
    let expectedStyleObject = {
      width: '80px',
      display: 'inline-block',
      marginRight: '30px',
      background: 'red'
    };
    expect(shallowRenderedComponent.props.style).to.eql(expectedStyleObject);
  });

  describe('when given beer is not current beer', () => {

    let shallowRenderedComponent2;

    before(() => {
      let renderer = TestUtils.createRenderer();
      renderer.render(<Beer beer={beer2} currentBeerId={1} onBeerClick={onBeerClick} />);
      shallowRenderedComponent2 = renderer.getRenderOutput();
    });

    it('renders styles properly too', () => {
      let expectedStyleObject = {
        width: '80px',
        display: 'inline-block',
        marginRight: '30px',
        background: 'none'
      };
      expect(shallowRenderedComponent2.props.style).to.eql(expectedStyleObject);
    });
  });

});