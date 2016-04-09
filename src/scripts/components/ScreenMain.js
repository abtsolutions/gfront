import React from 'react';
import SectionTopFilters from './SectionTopFilters';
import SectionAggregates from './SectionAggregates';
import SectionMainFilters from './SectionMainFilters';
import FilteredAggregateGraphsGrid from '../containers/FilteredAggregateGraphsGrid';
import FilteredGraphsGrid from '../containers/FilteredGraphsGrid';

const ScreenMain = () => (
  <div>
    <SectionTopFilters/>
    <div className='Row'>
      <SectionAggregates/>
      <FilteredAggregateGraphsGrid/>
    </div>
    <SectionMainFilters/>
    <FilteredGraphsGrid/>
  </div>
);

export default ScreenMain;
