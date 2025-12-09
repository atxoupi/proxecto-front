import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi } from '../services/auth';
import { tallerApi } from '../services/apiTalleres';

export const makestore = (preloadedState) => {
  const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [tallerApi.reducerPath]: tallerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, tallerApi.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makestore();
export default store;
