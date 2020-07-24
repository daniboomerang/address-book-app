import { combineReducers } from 'redux';
import usersFetch from './usersFetch';

const rootReducer = combineReducers({
  usersFetch,
});

export default rootReducer;
