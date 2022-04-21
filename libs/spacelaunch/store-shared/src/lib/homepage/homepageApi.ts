import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UpcomingLaunches } from './homepageTypes';

export const homepageApi = createApi({
	reducerPath: 'api/homepage',
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://spacelaunchnow.me/api/3.3.0/' 
	}),
	endpoints: build => ({
		getUpcomingLaunches: build.query<UpcomingLaunches, void>({ 
			query: () => 'launch/upcoming?mode=detailed'
		})
	})
});

export const { useGetUpcomingLaunchesQuery } = homepageApi;