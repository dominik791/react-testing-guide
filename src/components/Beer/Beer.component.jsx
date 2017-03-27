import React, { PropTypes, Component } from 'react';

class Beer extends Component {

  render() {
    const isCurrentBeer = this.props.beer.id === this.props.currentBeerId;

    const beerStyle = {
      width: '80px',
      display: 'inline-block',
      marginRight: '30px',
      background: isCurrentBeer ? 'red' : 'none'
    };

    return (
      <div style={beerStyle} onClick={() => this.props.onBeerClick(this.props.beer.id)}>
        <img src={this.props.beer.image_url} width={80} height={'auto'}/>
        <div>{this.props.beer.name}</div>
      </div>
    );
  }
}

Beer.propTypes = {
  beer: PropTypes.object,
  currentBeerId: PropTypes.number,
  onBeerClick: PropTypes.func
};

export default Beer;
