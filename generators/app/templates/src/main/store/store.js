import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/RootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default () => {
  return createStore(
    rootReducer,
    enhancer
  );
};