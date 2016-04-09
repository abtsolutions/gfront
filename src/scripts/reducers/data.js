import _ from 'lodash';

// FIXME : most of this is mock
const defaultState = {
  aggregates: {
    stats: {
      id: '1',
      cpu: '3',
      hostsUp: '19',
      hostsDown: '3',
      currentLoadAvg: '3% 2% 1%',
      utilizationAvg: '0%',
      localTime: '2016-03-31 11:34'
    },
    heatMap: {
      src: 'http://placehold.it/500x500'
    },
    graphs: _.map(_.range(0, 4), () => { return { src: 'http://placehold.it/500x500' } })
  },
  graphs: _.map(_.range(0, 15), () => { return { src: 'http://placehold.it/500x500' } })
};

export default (state = defaultState, action) => {
  // TODO : real data
  return state;
}
