import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import main from './main';

const rootReducer = combineReducers({
  main,
  form: formReducer,
});

export default rootReducer;
