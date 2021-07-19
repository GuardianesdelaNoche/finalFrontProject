import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

<<<<<<< Updated upstream
import * as api from '../api';
import { eventsReducer } from './reducers/eventsReducer';
import { paginationReducer } from './reducers/paginationReducer';

=======
<<<<<<< HEAD
 import * as api from '../api';
=======
//import * as api from '../api';
>>>>>>> develop
>>>>>>> Stashed changes


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    events: eventsReducer,
    pagination: paginationReducer
});


export const configureStore = ({ preloadedState, history }) => {
    const middlewares = [thunk.withExtraArgument({ api, history })];
    return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
};