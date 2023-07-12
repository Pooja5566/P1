import React, { Fragment } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import routes from "./routes";
import CoreLayout from "./CoreLayout";

const renderRoute = () => {
  return routes.map((route, i) => {
    console.log("route====", route);
    let { element: Element, meta, path, redirect, layout } = route;
    const Layout = route.layout || Fragment;
    return (
      <>
        {/* <Route
          exact={route.exact}
          key={i}
          path={path}
          render={(props) => <Layout>element= {<Element />}</Layout>}
        /> */}
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Element />
            </Layout>
          }
        />
      </>
    );
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CoreLayout />}>
      {renderRoute()}

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>
  )
);
export default router;
