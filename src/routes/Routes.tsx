import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import AuthLayout from "../pages/authpages/AuthLayout";
import Home from "../pages/Home";
import AuthPage from "../pages/authpages/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: Home }],
  },
  {
    path: "authenticate",
    Component: AuthLayout,
    children: [
      {
        path: "users",
        Component: AuthPage,
      },
    ],
  },
]);

export default router;
