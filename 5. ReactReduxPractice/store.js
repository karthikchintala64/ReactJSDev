import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import products from './data/products';
import Immutable from 'Immutable';

// create an object for the default data
const defaultState = {
  products//:Immutable.fromJS(products)//.toArray()
};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;