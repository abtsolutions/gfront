import React from 'react';
import Paper from 'material-ui/lib/paper';
import FilterMetricPicker from '../containers/FilterMetricPicker';
import FilterHostsScaledPicker from '../containers/FilterHostsScaledPicker';
import FilterGraphSizePicker from '../containers/FilterGraphSizePicker';
import FilterGraphColumnPicker from '../containers/FilterGraphColumnPicker';
import FilterGraphMaxGraphsDisplayedPicker from '../containers/FilterGraphMaxGraphsDisplayedPicker';
import FilterNodeMatchingPicker from '../containers/FilterNodeMatchingPicker';

const SectionMainFilters = () => (
  <Paper className='SectionMainFilters' zDepth={1}>
    <div className='SectionMainFilters-grid SectionMainFilters-grid_OneThird'>
      <FilterMetricPicker/>
      <FilterGraphSizePicker/>
      <br/>
    </div>
    <div className='SectionMainFilters-grid SectionMainFilters-grid_OneThird'>
      <FilterGraphMaxGraphsDisplayedPicker/>
      <FilterGraphColumnPicker/>
      <br/>
    </div>
    <div className='SectionMainFilters-grid SectionMainFilters-grid_OneThird'>
      <FilterHostsScaledPicker/>
      <br/>
    </div>
    <div className='sectionMainFilters-grid SectionMainFilters-grid_OneThird'>
      <FilterNodeMatchingPicker/>
      <br/>
    </div>
  </Paper>
);

export default SectionMainFilters;
