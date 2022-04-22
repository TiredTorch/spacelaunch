import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UpcomingEvents } from './homepageEventTypes';
import { UpcomingLaunches } from './homepageLaunchTypes';

export const homepageApi = createApi({
	reducerPath: 'api/homepage',
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://spacelaunchnow.me/api/3.3.0/' 
	}),
	endpoints: build => ({
		getUpcomingLaunches: build.query<UpcomingLaunches, number>({ 
			query: (page) => 
				`launch/upcoming?limit=6&mode=detailed&offset=${page * 6}`
		}),
		getUpcomingEvents: build.query<UpcomingEvents, number>({
			query: (page) => 
				`event/upcoming/?limit=3&mode=detailed&offset=${page * 3}`
		})
	})
});

export const { 
	useGetUpcomingLaunchesQuery, 
	useGetUpcomingEventsQuery 
} = homepageApi;