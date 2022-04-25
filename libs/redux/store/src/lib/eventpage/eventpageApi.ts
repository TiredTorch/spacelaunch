import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventItem } from './eventpage.types';

export const eventpageApi = createApi({
	reducerPath: 'api/event',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://spacelaunchnow.me/api/ll/2.2.0/event/'
	}),
	endpoints: build => ({
		getEvent: build.query<EventItem, string>({
			query: (id) => `${id}`
		})
	})
});

export const {
	useGetEventQuery
} = eventpageApi;