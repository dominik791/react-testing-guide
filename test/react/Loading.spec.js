import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading/Loading.component';

describe.only('Enzyme test', () => {
  it('renders Loading component', () => {
    let component = shallow(<Loading/>);
    console.log(component.contains(<div>loading</div>));
  });
});