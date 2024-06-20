import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";

const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/actus", element: <Actualites /> },
  { path: "/evenements", element: <Evenements /> },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
