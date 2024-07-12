import { configureStore } from '@reduxjs/toolkit';
import userReducer, { getUser, getUsersWithMessages } from './slices/userSlice';
import messageReducer, { getMessages } from './slices/messageSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create persisted reducers
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedMessageReducer = persistReducer(persistConfig, messageReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    message: persistedMessageReducer,
  },
});
store.dispatch(getUser());
store.dispatch(getMessages());
store.dispatch(getUsersWithMessages());
// Initialize persistor
const persistor = persistStore(store);

export { store, persistor };
