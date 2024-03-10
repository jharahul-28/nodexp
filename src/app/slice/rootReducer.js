import { combineReducers } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userInputReducer from './userInputSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
  userInput: userInputReducer,
});

export default rootReducer;
