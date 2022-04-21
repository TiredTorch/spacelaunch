import { FC, lazy } from 'react';

export type RouteType = {
  path: string,
  page: FC
}

const LazyHomePage = lazy(() => import('../pages/home-page/home-page'));
const LazyEventPage = lazy(() => import('../pages/event-page/event-page'));
const LazyRocketPage = lazy(() => import('../pages/rocket-page/rocket-page'));
const LazyLaunchPage = lazy(() => import('../pages/launch-page/launch-page'));


export const routeList: Array<RouteType> = [
	{
		path: '/',
		page: LazyHomePage
	},
	{
		path: '/event/:id',
		page: LazyEventPage
	},
	{
		path: '/rocket/:id',
		page: LazyRocketPage
	},
	{
		path: '/launch/:id',
		page: LazyLaunchPage
	},
];