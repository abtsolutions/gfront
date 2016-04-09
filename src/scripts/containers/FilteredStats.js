import React from 'react';
import { connect } from 'react-redux';
import Stats from '../components/Stats';

const mapStateToProps = (state) => {
  return { stats: state.data.aggregates.stats };
};

const FilteredStats = connect(
  mapStateToProps,
  undefined
)(Stats);

export default FilteredStats;
