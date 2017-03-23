import React, { PropTypes } from 'react';

const Beer = ({ beer, currentBeerId, onBeerClick }) => {

  const isCurrentBeer = beer.id === currentBeerId;

  const beerStyle = {
    width: '80px',
    display: 'inline-block',
    marginRight: '30px',
    background: isCurrentBeer ? 'red' : 'none'
  };

  return (
    <div style={beerStyle} onClick={() => onBeerClick(beer.id)}>
      <img src={beer.image_url} width={80} height={'auto'} />
      <div>{beer.name}</div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.object,
  currentBeerId: PropTypes.number,
  onBeerClick: PropTypes.func
};

export default Beer;
