import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetNodeMatchingPicker from '../components/WidgetNodeMatchingPicker';

const mapStateToProps = (state) => {
  return {
    nodeMatching: state.filters.nodeMatching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (nodeMatching) => {
      const changes = { nodeMatching };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterNodeMatchingPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetNodeMatchingPicker);

export default FilterNodeMatchingPicker;
