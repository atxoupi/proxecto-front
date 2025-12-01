import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi } from '../services/auth';

export const makestore = (preloadedState) => {
  const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makestore();
export default store;
