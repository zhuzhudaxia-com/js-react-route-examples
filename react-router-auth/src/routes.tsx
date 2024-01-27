import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("./pages/App"),
  },
  {
    path: "/",
    lazy: () => import("./layouts/AuthGatewayLayout"),
    children: [
      {
        path: "login",
        lazy: () => import("./pages/Login"),
      },
      {
        path: "home",
        lazy: () => import("./pages/Home"),
      },
    ],
  },
];

export default routes;
