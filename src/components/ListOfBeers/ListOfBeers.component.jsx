import React from 'react';
import Beer from '../Beer/Beer.component';

const ListOfBeers = ({ beers, currentBeerId, onBeerClick }) => {
  return (
    <div>
      {
        beers.map((beer, index) =>
          <span key={index}>
            <Beer beer={beer}
                  currentBeerId={currentBeerId}
                  onBeerClick={onBeerClick} />
          </span>)
      }
    </div>
  );
};

export default ListOfBeers;
