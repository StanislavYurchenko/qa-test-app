import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import authUsersReducer from './auth/authReducer';
import testReducer from './test/testReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['questions', 'answers', 'card'],
  blacklist: ['_persist'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authUsersReducer),
  test: persistReducer(testPersistConfig, testReducer),
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
