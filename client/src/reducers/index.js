import { combineReducers } from 'redux';

import auth from './auth.js';
import posts from './posts';
import cards from './cards';

export const reducers = combineReducers({ auth, posts, cards });

