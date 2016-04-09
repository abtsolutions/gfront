import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetMetricPicker from '../components/WidgetMetricPicker';

const mapStateToProps = (state) => {
  return {
    metric: state.filters.metric
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (metric) => {
      const changes = { metric };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterMetricPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetMetricPicker);

export default FilterMetricPicker;
