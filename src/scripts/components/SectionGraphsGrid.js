import React from 'react';
import Paper from 'material-ui/lib/paper';

const SectionGraphsGrid = ({ graphs }) => (
  <Paper className='SectionGraphsGrid' zDepth={1}>
    <div className='SectionGraphsGrid-list'>
      {graphs.map(({ src }, index) => (
        <div key={index} className='SectionGraphsGrid-item'>
          <img src={src} />
        </div>
      ))}
    </div>
  </Paper>
);

export default SectionGraphsGrid;
