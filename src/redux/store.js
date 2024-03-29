import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactReducer } from './reducers';

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
