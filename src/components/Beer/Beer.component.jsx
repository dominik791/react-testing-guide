import React from 'react';

const Beer = ({ beer }) => {
  return (
    <div style={{width: '80px', display: 'inline-block', marginRight: '30px'}}>
      <img src={beer.image_url} width={80} height={'auto'} />
      <div>{beer.name}</div>
    </div>
  );
};

export default Beer;
