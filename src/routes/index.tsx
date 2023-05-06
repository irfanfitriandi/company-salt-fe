import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LandingPage = lazy(() => import("pages/LandingPage"));
const NotFoundPage = lazy(() => import("pages/NotFound"));
const Loading = lazy(() => import("components/Loading"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default index;
