import { SpacelaunchLayout } from "@spacelaunch/spacelaunch/layout-shared";
import { Suspense } from "react";
import { Navigate, Route, Routes as RoutesWrapper } from "react-router";
import { routeList, RouteType } from "../../rouresList";

/* eslint-disable-next-line */
export interface RoutesProps {}

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
