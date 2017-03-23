import React from 'react';
import ListOfBeersContainer from './containers/ListOfBeers/ListOfBeers.container';

var App = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div>
        <ListOfBeersContainer />
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default App;
