import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading/Loading.component';

describe('<Loading />', () => {
  it('renders Loading component correctly', () => {
    let component = shallow(<Loading/>);
    expect(component.contains(<div>loading</div>)).to.equal(true);
  });
});
