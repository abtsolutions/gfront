import React from 'react';
import { connect } from 'react-redux';
import SectionGraphsGrid from '../components/SectionGraphsGrid';

const mapStateToProps = (state) => {
  return { graphs: state.data.graphs };
};

const FilteredGraphsGrid = connect(
  mapStateToProps,
  undefined
)(SectionGraphsGrid);

export default FilteredGraphsGrid;
