import { FC, lazy } from 'react';

export type RouteType = {
  path: string,
  heroComponent: FC
  contentCompnent: FC
}

const EventHero = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.EventContent})));
const EventContent = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.EventSection})));

const HomeHero = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.HomeContent})));
const HomeContent = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.HomeSection})));

const LaunchHero = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.LaunchContent})));
const LaunchContent = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.LaunchSection})));

const RocketHero = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.RocketContent})));
const RocketContent = lazy(() => import('@spacelaunch/spacelaunch/ui-shared')
	.then(module => ({ default: module.RocketSection})));

export const routeList: Array<RouteType> = [
	{
		path: '/',
		heroComponent: HomeHero,
		contentCompnent: HomeContent,
	},
	{
		path: '/event/:id',
		heroComponent: EventHero,
		contentCompnent: EventContent,
	},
	{
		path: '/rocket/:id',
		heroComponent: RocketHero,
		contentCompnent: RocketContent,
	},
	{
		path: '/launch/:id',
		heroComponent: LaunchHero,
		contentCompnent: LaunchContent,
	}
];