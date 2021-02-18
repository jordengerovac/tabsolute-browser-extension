import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './actions/stateActions';
import { v4 as uuid } from 'uuid';

const initialState = loadState();

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;