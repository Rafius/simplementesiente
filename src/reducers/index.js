import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import email from './email';

export default combineReducers({
  form: formReducer,
  email,
});
