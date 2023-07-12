import React from "react";
// import { Redirect } from "react-router-dom";
import HomeLayout from "../Homelayout";
// import DashboardLayout from "src/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Properties from "../Projects/Properties";
import Iris from "../Projectpages/Iris";
import Daisy from "../Projectpages/Daisy";
import Jasmine from "../Projectpages/Jasmine";
import Magnolia from "../Projectpages/Magnolia";
import Lotus from "../Projectpages/Lotus";
import Lily from "../Projectpages/Lily";
import DaisyTower2 from "../Projectpages/DaisyTower2";
import BlogForm from "../Firebase/BlogForm";
import BlogList from "../Firebase/BlogList";
import Flatsinchattarpur from "../Projectpages/Flatsinchattarpur";
const routes = [
  {
    // exact: true,
    path: "/",
    element: Home,
    layout: HomeLayout,
    // element: lazy(() => import("../Home")),
  },
  {
    // exact: true,
    path: "/about-us",
    element: About,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/properties",
    element: Properties,
    layout: HomeLayout,
    // element: lazy(() => import("../Projects")),
  },
  {
    // exact: true,
    path: "/speak-to-an-expert",
    element: Contact,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/iris",
    element: Iris,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/daisy",
    element: Daisy,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/jasmine",
    element: Jasmine,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/lotus",
    element: Lotus,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/magnolia",
    element: Magnolia,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/lily",
    element: Lily,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/daisyT2",
    element: DaisyTower2,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/blog",
    element: BlogForm,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/bloglist",
    element: BlogList,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/flats-in-chattarpur/",
    element: Flatsinchattarpur,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
];
export default routes;
