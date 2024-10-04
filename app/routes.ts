import { type RouteConfig, route } from "@react-router/dev/routes";
import { index } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export const routes: RouteConfig = [
  ...(await flatRoutes({
    rootDirectory: "fs-routes",
  })),
  // This line below does not result in an additional collision within the dev console.
  index("routes/home.tsx"),
  //route("/example", "routes/home.tsx"),
];
