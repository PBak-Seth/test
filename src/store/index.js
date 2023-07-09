import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from '../api/users';
import usersReducer from '../features/users/usersSlice';

const combinedReducer = combineReducers({
  users: usersReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
