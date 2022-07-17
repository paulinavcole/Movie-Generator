import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import moviesReducer from './movies';

//combiner not needed, using for practice
const rootReducer = combineReducers({
  movies: moviesReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);