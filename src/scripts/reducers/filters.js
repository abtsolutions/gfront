import _ from 'lodash';
import { ACTION_UPDATE_FILTERS } from '../actions';

const defaultState = {
  timeFrame: {
    type: 1,
    bounds: undefined
  },
  node: 0,
  nodeMatching: '',
  metric: 0,
  hostsScaled: 0,
  graphSize: 0,
  column: 0,
  maxGraphsDisplayed: 0,
  sort: 0
};

export default (state = defaultState, action) => {
  if (action.type === ACTION_UPDATE_FILTERS) {
    return _.merge({}, state, action.changes);
  }

  return state;
}
