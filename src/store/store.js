import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import * as api from '../api';


const reducers = combineReducers({

});


export const configureStore = ({ preloadedState, history }) => {
    const middlewares = [thunk.withExtraArgument({ history })];
    return createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)))
};