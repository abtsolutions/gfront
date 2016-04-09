import React from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';

const mapStateToProps = (state) => {
  return { isDisplayed: state.isLoaderDisplayed };
};

const DisplayableLoader = connect(
  mapStateToProps,
  undefined
)(Loader);

export default DisplayableLoader;
