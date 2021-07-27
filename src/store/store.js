import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

import * as api from '../api';
import { eventsReducer } from './reducers/eventsReducer';
import { eventDetailsReducer } from './reducers/eventDetailsReducer';
import { paginationReducer } from './reducers/paginationReducer';



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    events: eventsReducer,
    event: eventDetailsReducer,
    pagination: paginationReducer
});


export const configureStore = ({ preloadedState, history }) => {
    const middlewares = [thunk.withExtraArgument({ api, history })];
    return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
};