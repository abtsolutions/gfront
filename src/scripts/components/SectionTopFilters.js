import React from 'react';
import Paper from 'material-ui/lib/paper';
import FilterTimeFramePicker from '../containers/FilterTimeFramePicker';
import FilterNodePicker from '../containers/FilterNodePicker';

const SectionTopFilters = () => (
  <Paper className='SectionTopFilters' zDepth={1}>
    <div className='SectionTopFilters-grid SectionTopFilters-grid_FullWidth'>
      <FilterTimeFramePicker/>
      <br/>
      <FilterNodePicker/>
    </div>
  </Paper>
);

export default SectionTopFilters;
