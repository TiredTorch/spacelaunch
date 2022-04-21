import { configureStore } from '@reduxjs/toolkit';
import { homepageApi } from './homepage/homepageApi';

export const store = configureStore({
	reducer: { [homepageApi.reducerPath]: homepageApi.reducer},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(homepageApi.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>