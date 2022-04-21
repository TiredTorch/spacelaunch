import { configureStore } from '@reduxjs/toolkit';
import { eventpageApi } from './eventpage/eventpageApi';
import { homepageApi } from './homepage/homepageApi';

export const store = configureStore({
	reducer: { 
		[homepageApi.reducerPath]: homepageApi.reducer,
		[eventpageApi.reducerPath]: eventpageApi.reducer
	},
	middleware: (getDefaultMiddleware) =>   
		getDefaultMiddleware()
			.concat(homepageApi.middleware)
			.concat(eventpageApi.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>