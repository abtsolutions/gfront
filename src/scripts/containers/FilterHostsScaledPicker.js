import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../actions';
import WidgetHostsScaledPicker from '../components/WidgetHostsScaledPicker';

const mapStateToProps = (state) => {
  return {
    hostsScaled: state.filters.hostsScaled
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (hostsScaled) => {
      const changes = { hostsScaled };
      dispatch(updateFilters(changes));
    }
  };
};

const FilterHostsScaledPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetHostsScaledPicker);

export default FilterHostsScaledPicker;
