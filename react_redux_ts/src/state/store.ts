import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/indexReducer';
import thunk from 'redux-thunk';

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)