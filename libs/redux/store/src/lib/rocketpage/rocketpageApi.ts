import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Rocket } from './rocketpage.types';

export const rocketpageApi = createApi({
	reducerPath: 'api/rocket',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://spacelaunchnow.me/api/3.3.0/config/launcher/'
	}),
	endpoints: build => ({
		getRocket: build.query<Rocket, string>({
			query: (id) => `${id}`
		})
	})
});

export const {
	useGetRocketQuery
} = rocketpageApi;