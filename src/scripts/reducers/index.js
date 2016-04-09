import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import isLoaderDisplayed from './isLoaderDisplayed';
import filters from './filters';
import data from './data';

export default combineReducers({
  isLoaderDisplayed, filters, data,
  routing: routerReducer
});
