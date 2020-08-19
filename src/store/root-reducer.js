import { combineReducers } from 'redux';

import { counterReducer } from './counter/reducer';

function rootReducer() {
  let reducerMap = {
    counter: counterReducer
  };

  return combineReducers(reducerMap);
}

export { rootReducer };
