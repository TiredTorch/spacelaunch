import { lazy } from 'react';
import { ROUTE } from '../../../../libs/shared/enums/src/lib/enums';

export type RouteType = {
  path: string,
  page: React.LazyExoticComponent<any>
}

const LazyHomePage = lazy(() => import('../pages/homePage/HomePage'));
const LazyEventPage = lazy(() => import('../pages/eventPage/EventPage'));
const LazyRocketPage = lazy(() => import('../pages/rocketPage/RocketPage'));
const LazyLaunchPage = lazy(() => import('../pages/launchPage/LaunchPage'));


export const routeList: Array<RouteType> = [
	{
		path: ROUTE.HOME,
		page: LazyHomePage
	},
	{
		path: ROUTE.EVENTS,
		page: LazyEventPage
	},
	{
		path: ROUTE.ROCKETS,
		page: LazyRocketPage
	},
	{
		path: ROUTE.LAUNCH,
		page: LazyLaunchPage
	},
];