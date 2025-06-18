// src/router.js
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Header from "./components/layouts/Header";
import Layout from "./components/Layout";

// All routes

const rootRoute = createRootRoute({
  component: Layout,
});
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([indexRoute, notFoundRoute]);

export const router = createRouter({ routeTree });
