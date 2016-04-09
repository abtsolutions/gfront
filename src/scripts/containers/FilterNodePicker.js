import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetNodePicker from '../components/WidgetNodePicker';

const mapStateToProps = (state) => {
  return {
    node: state.filters.node
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (node) => {
      const changes = { node };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterNodePicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetNodePicker);

export default FilterNodePicker;
