import { useScrollToTop } from '@spacelaunch/shared/hooks';
import { Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router';
import { routeList } from '../routeList';

export const AppRoutes = () => {

	useScrollToTop();
	
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<RoutesWrapper>
				{routeList.map((route) => {
					return(
						<Route
							path={route.path}
							key={`route ${route.path}`}
							element={<route.page/>}
						/>
					);
				})}
			</RoutesWrapper>
		</Suspense>
	);
};

export default AppRoutes;
