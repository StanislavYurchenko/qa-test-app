import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import authUsersReducer from './auth/authReducer';
import testReducer from './test/testReducer';
import themeReducer from './theme/themeReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['questions', 'answers', 'activeCard', 'category', 'result'],
  blacklist: ['_persist'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authUsersReducer),
  test: persistReducer(testPersistConfig, testReducer),
  theme: persistReducer(themePersistConfig, themeReducer),
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
