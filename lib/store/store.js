import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './rootReducer';

const initialState = {};

const rootReducer = createRootReducer();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');

    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const initializeStore = (preloadedState = initialState) => createStore(rootReducer, preloadedState, bindMiddleware([thunk]));

export default initializeStore;
