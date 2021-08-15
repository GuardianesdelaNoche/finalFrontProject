import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

import * as api from '../api';
import { eventsReducer } from './reducers/eventsReducer';
import { paginationReducer } from './reducers/paginationReducer';
import { tagsReducer } from './reducers/tagsReducer';



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    events: eventsReducer,
    pagination: paginationReducer,
    tags: tagsReducer
});


export const configureStore = ({ preloadedState, history }) => {
    const middlewares = [thunk.withExtraArgument({ api, history })];
    return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
};