/* eslint global-require:0 */
/* eslint piggyback/no-restricted-global-extend:0 */
/* eslint valid-typeof:0 */
/* globals __DEV__ */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import makeReducer from './reducers';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
    const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
    const enhancers = [];
    if (__DEV__) {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === `function`) {
            enhancers.push(devToolsExtension());
        }
    }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
    const store = createStore(
    makeReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
    store.asyncReducers = {};

    if (module.hot) {
        module.hot.accept(`./reducers`, () => {
            const reducers = require(`./reducers`).default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }

    return store;
};
