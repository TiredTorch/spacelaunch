import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UpcomingEvents } from './homepageEventTypes';
import { UpcomingLaunches } from './homepageLaunchTypes';

export const homepageApi = createApi({
	reducerPath: 'api/homepage',
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://spacelaunchnow.me/api/3.3.0/' 
	}),
	endpoints: build => ({
		getUpcomingLaunches: build.query<UpcomingLaunches, void>({ 
			query: () => 'launch/upcoming?limit=12&mode=detailed'
		}),
		getUpcomingEvents: build.query<UpcomingEvents, void>({
			query: () => 'event/upcoming/?limit=12&mode=detailed'
		})
	})
});

export const { 
	useGetUpcomingLaunchesQuery, 
	useGetUpcomingEventsQuery 
} = homepageApi;