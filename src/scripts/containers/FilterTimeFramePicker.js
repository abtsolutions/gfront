import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetTimeFramePicker from '../components/WidgetTimeFramePicker';

const mapStateToProps = (state) => {
  return {
    type: state.filters.timeFrame.type,
    bounds: state.filters.timeFrame.bounds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (type, bounds = undefined) => {
      const changes = { timeFrame: { type, bounds } };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterTimeFramePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetTimeFramePicker);

export default FilterTimeFramePicker;
