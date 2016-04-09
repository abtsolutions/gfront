import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetGraphSortPicker from '../components/WidgetGraphSortPicker';

const mapStateToProps = (state) => {
  return {
    sort: state.filters.sort
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (sort) => {
      const changes = { sort };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterGraphSortPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGraphSortPicker);

export default FilterGraphSortPicker;
