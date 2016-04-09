import React from 'react';
import { connect } from 'react-redux';
import HeatMap from '../components/HeatMap';

const mapStateToProps = (state) => {
  return { heatMap: state.data.aggregates.heatMap };
};

const FilteredHeatMap = connect(
  mapStateToProps,
  undefined
)(HeatMap);

export default FilteredHeatMap;
