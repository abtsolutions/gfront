import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetGraphColumnPicker from '../components/WidgetGraphColumnPicker';

const mapStateToProps = (state) => {
  return {
    column: state.filters.column
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (column) => {
      const changes = { column };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterGraphColumnPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGraphColumnPicker);

export default FilterGraphColumnPicker;
