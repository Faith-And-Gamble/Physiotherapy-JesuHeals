import { combineReducers } from 'redux';
import loaderReducer from './reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
});
export default rootReducer;
