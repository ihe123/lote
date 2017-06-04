import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profile from './profile';
import lotes from './lotes';
import contacts from './contacts';
import myInt from './myInt';
import lotecation from './lotecation';
import activeContact from './activeContact';
import activeMessage from './activeMessage';

const rootReducer = combineReducers({ 
  profile,
  lotes,
  contacts,
  myInt,
  lotecation,
  activeContact,
  activeMessage,
  routing: routerReducer
});

export default rootReducer;
