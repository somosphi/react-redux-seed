import { combineReducers } from 'redux';
import error from './error/reducer';
import loading from './loading/reducer';
import counter from './counter/reducer';

const rootReducer = combineReducers({
  error,
  loading,
  counter,
});

export default rootReducer;
