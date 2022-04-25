import { useScrollToTop } from '@spacelaunch/shared/hooks';
import { Loading } from '@spacelaunch/shared/ui';
import { Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router';
import { routeList } from '../routeList';

export const AppRoutes = () => {

	useScrollToTop();
	
	return (
		<Suspense fallback={<Loading/>}>
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
