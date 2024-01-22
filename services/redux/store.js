import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For React Native
import {counterReducer, secondReducer} from '..';
import {getPersistConfig} from 'redux-deep-persist';
//?combining  in case of multiple reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  second: secondReducer,
  // Add more reducers if needed
});

const persistConfig = getPersistConfig({
  key: 'root',
  storage: AsyncStorage, // whatever storage you use
  whitelist: ['counter.field2', 'second.value2'],
  rootReducer, // your root reducer must be also passed here
});

//?without package but only one level
//*if we don't add any value to whitelist and blacklist then it will persist all state
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   // whitelist: ['counter'], // Only persist the 'value' field
//   // // blacklist: ['counter'], // You can use blacklist if you prefer
//   transforms: [counterTransform],
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    rootReducer: persistedReducer, //?this is the name we use.
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export {store, persistor};
