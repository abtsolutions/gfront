import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers';
import LayoutMain from './components/LayoutMain';
import ScreenMain from './components/ScreenMain';

// TODO : remove when both React and Material-UI update to the major version
injectTapEventPlugin();

const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(hashHistory)
  )
);

const history = syncHistoryWithStore(hashHistory, store);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={LayoutMain}>
        <IndexRoute component={ScreenMain}/>
      </Route>
    </Router>
  </Provider>
);

render(app, document.getElementById('app'));
