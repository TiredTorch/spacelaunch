import { Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router';
import { routeList } from '../routeList';

/* eslint-disable-next-line */
export interface AppRoutesProps {}

// eslint-disable-next-line no-unused-vars
export function AppRoutes(props: AppRoutesProps) {
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
}

export default AppRoutes;
