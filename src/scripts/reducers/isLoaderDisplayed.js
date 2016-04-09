import _ from 'lodash';
import { ACTION_TOGGLE_LOADER } from '../actions';

const defaultState = false;

export default (state = defaultState, action) => {
  if (action.type === ACTION_TOGGLE_LOADER) {
    return (_.isBoolean(action.showLoader) ? action.showLoader : !state);
  }

  return state;
}
