import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";

const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/actus", element: <Actualites /> },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
