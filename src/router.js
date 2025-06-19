// src/router.js
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import TodoList from "./routes/TodoList";
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
const todoListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/todolist",
  component: TodoList,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  todoListRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
