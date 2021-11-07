import { combineReducers } from 'redux';

import authReducer from './authReducer';
import clientsReducer from './clientsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientsReducer,
});

export default rootReducer;
