import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['value'], // Only persist the 'value' field
  // blacklist: ['value1'], // You can use blacklist if you prefer
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

const persistor = persistStore(store);
export {store, persistor};
