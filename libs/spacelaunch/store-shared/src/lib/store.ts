import { configureStore } from '@reduxjs/toolkit';
import { eventpageApi } from './eventpage/eventpageApi';
import { homepageApi } from './homepage/homepageApi';
import { launchpageApi } from './launchpage/launchpageApi';

export const store = configureStore({
	reducer: { 
		[homepageApi.reducerPath]: homepageApi.reducer,
		[eventpageApi.reducerPath]: eventpageApi.reducer,
		[launchpageApi.reducerPath]: launchpageApi.reducer
	},
	middleware: (getDefaultMiddleware) =>   
		getDefaultMiddleware()
			.concat(homepageApi.middleware)
			.concat(eventpageApi.middleware)
			.concat(launchpageApi.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>