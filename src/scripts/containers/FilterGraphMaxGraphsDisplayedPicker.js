import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetGraphMaxPicker from '../components/WidgetGraphMaxGraphsDisplayedPicker';

const mapStateToProps = (state) => {
  return {
    maxGraphsDisplayed: state.filters.maxGraphsDisplayed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (maxGraphsDisplayed) => {
      const changes = { maxGraphsDisplayed };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterGraphMaxPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetGraphMaxPicker);

export default FilterGraphMaxPicker;
