import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: [],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware =
  process.env.NODE_ENV === 'development'
    ? [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        logger,
      ]
    : getDefaultMiddleware;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const persistor = persistStore(store);

export { store };

// const store = configureStore({
//   reducer: {
//     phoneBook: persistReducer(contactsPersistConfig, phoneBookReducer),
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware,
// });

// const persistor = persistStore(store);

// export { store, persistor };
