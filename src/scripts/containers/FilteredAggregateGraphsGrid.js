import React from 'react';
import { connect } from 'react-redux';
import SectionAggregateGraphsGrid from '../components/SectionAggregateGraphsGrid';

const mapStateToProps = (state) => {
  return { graphs: state.data.aggregates.graphs };
};

const FilteredAggregateGraphsGridStats = connect(
  mapStateToProps,
  undefined
)(SectionAggregateGraphsGrid);

export default FilteredAggregateGraphsGridStats;
