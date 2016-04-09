import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetGraphSizePicker from '../components/WidgetGraphSizePicker';

const mapStateToProps = (state) => {
  return {
    graphSize: state.filters.graphSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (graphSize) => {
      const changes = { graphSize };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterGraphSizePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGraphSizePicker);

export default FilterGraphSizePicker;
