import React from 'react';
import Beer from '../Beer/Beer.component';

const ListOfBeers = ({ beers }) => {
  return (
    <div>
      {beers.map((beer, index) => <span key={index}><Beer beer={beer}/></span>)}
    </div>
  );
};

export default ListOfBeers;
