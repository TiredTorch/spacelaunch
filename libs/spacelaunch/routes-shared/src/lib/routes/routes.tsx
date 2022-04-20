import { SpacelaunchLayout } from '@spacelaunch/spacelaunch/layout-shared';
import { Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router';
import { routeList } from '../../rouresList';

/* eslint-disable-next-line */
export interface RoutesProps {}

// eslint-disable-next-line no-unused-vars
export function Routes(props: RoutesProps) {
	return (
		<Suspense fallback={<h3>Loading...</h3>}>
			<RoutesWrapper>
				{routeList.map((route) => {
					return (
						<Route
							path={route.path}
							key={`route ${route.path}`}
							element={
								<SpacelaunchLayout 
									heroComponent={route.heroComponent}
									contentComponent={route.contentCompnent} 
									settings={{
										hasHeaderLink: !(route.path === '/')
									}}
								/>
							}
						/>
					);
				})}
			</RoutesWrapper>
		</Suspense>
	);
}

export default Routes;
