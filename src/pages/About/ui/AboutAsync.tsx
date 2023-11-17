import { lazy } from "react";

export default lazy(() =>
  new Promise((r) => setTimeout(r, 2000)).then(() => import("./About"))
);
