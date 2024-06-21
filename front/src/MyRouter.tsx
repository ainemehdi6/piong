import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import PublicLayout from "./layouts/PublicLayout";
import MyRoutes from "./MyRoutes";

const router = createBrowserRouter([
  {
    path: MyRoutes.ACCUEIL,
    element: (
      <PublicLayout>
        <Accueil />
      </PublicLayout>
    ),
  },
  {
    path: MyRoutes.ACTUS,
    element: (
      <PublicLayout>
        <Actualites />
      </PublicLayout>
    ),
  },
  {
    path: MyRoutes.EVENEMENTS,
    element: (
      <PublicLayout>
        <Evenements />
      </PublicLayout>
    ),
  },
  {
    path: MyRoutes.CONTACT,
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
