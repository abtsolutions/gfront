import React from 'react';

const HeatMap = ({ heatMap }) => (
  <div className='HeatMap'>
    <span>Server Load Distribution</span>
    <img src={heatMap.src}/>
  </div>
);

export default HeatMap;
