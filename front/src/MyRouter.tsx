import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import PublicLayout from "./layouts/PublicLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <Accueil />
      </PublicLayout>
    ),
  },
  {
    path: "/actus",
    element: (
      <PublicLayout>
        <Actualites />
      </PublicLayout>
    ),
  },
  {
    path: "/evenements",
    element: (
      <PublicLayout>
        <Evenements />
      </PublicLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <PublicLayout>
        <Contact />
      </PublicLayout>
    ),
  },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
