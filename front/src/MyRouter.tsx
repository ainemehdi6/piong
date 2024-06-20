import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/actus", element: <Actualites /> },
  { path: "/evenements", element: <Evenements /> },
  { path: "/contact", element: <Contact /> },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
