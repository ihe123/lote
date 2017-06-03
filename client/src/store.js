
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

var defaultState = {
  profile: {},
  lotes: [],
  contacts: ['Ed', 'Alana', 'Ivana', 'Connor'],
  myInt: 100
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
