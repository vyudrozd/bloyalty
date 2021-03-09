import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user/reducer';

const createRootReducer = () => combineReducers({
  user,
  form: formReducer,
});

export default createRootReducer;
