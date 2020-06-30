import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Utilities
import reducerCharacter from './reducers/characters';

export const store = createStore(reducerCharacter, applyMiddleware(thunk));
