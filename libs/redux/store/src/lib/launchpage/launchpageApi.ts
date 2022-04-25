import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Launches } from './launchpageTypes';

export const launchpageApi = createApi({
	reducerPath: 'api/launch',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://spacelaunchnow.me/api/ll/2.2.0/launch/'
	}),
	endpoints: build => ({
		getLaunch: build.query<Launches, string>({
			query: (id) => `${id}`
		})
	})
});

export const {
	useGetLaunchQuery
} = launchpageApi;