import { combineReducers } from '@reduxjs/toolkit';
import global from './globalSlice';


const rootReducer = combineReducers({
  global
});

export default rootReducer;