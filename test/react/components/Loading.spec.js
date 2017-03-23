import React from 'react';
import { findDOMNode } from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import Loading from '../../../src/components/Loading/Loading.component';
import TestUtils from 'react-addons-test-utils';

describe('Given an instance of Loading component', () => {

  describe('when we test against real DOM', () => {

    let component;
    let renderedDOM;

    before(() => {
      // if we test stateless component, we need to wrap it in e.g. <div />
      component = TestUtils.renderIntoDocument(<div><Loading /></div>);
      renderedDOM = findDOMNode(component);
    });

    it('should render div', () => {
      // here just use DOM Web API
      let tagName = renderedDOM.children[0].tagName;
      expect(tagName).to.equal('DIV');
    });

    it('should have loading text inside', () => {
      let innerText = renderedDOM.children[0].innerText;
      expect(innerText).to.equal('loading');
    });
  });

  describe('when we test against virtual DOM using full DOM rendering', () => {

    let component;
    let renderedDOM;
    let renderedStaticMarkup;

    before(() => {
      // if we test stateless functional component against virtual DOM, we need React wrapper
      let Wrapper = React.createClass({
        render: function () {
          return this.props.children;
        }
      });
      component = TestUtils.renderIntoDocument(<Wrapper><Loading /></Wrapper>);
      renderedDOM = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
      renderedStaticMarkup = renderToStaticMarkup(<Loading />);
    });

    it('should render exactly one div', () => {
      expect(renderedDOM).to.have.length(1);
    });

    it('should have loading text in inside', () => {
      expect(renderedStaticMarkup).to.equal('<div>loading</div>');
    });
  });

  describe('when we test against virtual DOM using shallow rendering', () => {

    let shallowRenderedComponent;

    before(() => {
      let renderer = TestUtils.createRenderer();
      renderer.render(<Loading />);
      shallowRenderedComponent = renderer.getRenderOutput();
    });

    it('should render div', () => {
      expect(shallowRenderedComponent.type).to.equal('div');
    });

    it('should render div with loading text inside', () => {
      expect(shallowRenderedComponent.props.children).to.equal('loading');
    });

  });
});
