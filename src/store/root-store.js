import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { composeEnhancers } from 'lib/redux/utils';

import { rootReducer } from './root-reducer';

/* Middlewares */
const middlewares = [reduxThunk];

/* Compose enhancers */
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function configureStore(initialState = {}) {
  let store = createStore(rootReducer(), initialState, enhancer);

  return store;
}

export { configureStore };
