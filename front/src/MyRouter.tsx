import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <p>Hello World</p> }]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
