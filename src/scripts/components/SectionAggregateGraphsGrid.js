import React from 'react';
import Paper from 'material-ui/lib/paper';

const SectionAggregateGraphsGrid = ({ graphs }) => (
  <Paper className='SectionAggregateGraphsGrid' zDepth={1}>
    <div className='SectionAggregateGraphsGrid-list'>
      {graphs.map(({ src }, index) => (
        <div key={index} className='SectionAggregateGraphsGrid-item'>
          <img src={src}/>
        </div>
      ))}
    </div>
  </Paper>
);

export default SectionAggregateGraphsGrid;
