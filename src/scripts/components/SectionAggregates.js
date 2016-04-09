import React from 'react';
import Paper from 'material-ui/lib/paper';
import FilteredStats from '../containers/FilteredStats';
import FilteredHeatMap from '../containers/FilteredHeatMap';

const SectionAggregates = () => (
  <Paper className='SectionAggregates' zDepth={1}>
    <FilteredStats/>
    <FilteredHeatMap/>
  </Paper>
);

export default SectionAggregates;
