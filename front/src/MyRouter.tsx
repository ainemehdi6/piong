import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";

const router = createBrowserRouter([{ path: "/", element: <Accueil /> }]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
