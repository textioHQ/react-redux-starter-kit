import { combineReducers } from 'redux';

export const makeRootReducer = asyncReducers => combineReducers({
    ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
