import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import PublicLayout from "./layouts/PublicLayout";
import MyPaths from "./MyPaths";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: MyPaths.ACCUEIL,
    element: (
      <PublicLayout>
        <Accueil />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.ACTUS,
    element: (
      <PublicLayout>
        <Actualites />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.EVENEMENTS,
    element: (
      <PublicLayout>
        <Evenements />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.CONTACT,
    element: (
      <PublicLayout>
        <Contact />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.LOGIN,
    element: (
      <PublicLayout>
        <Login />
      </PublicLayout>
    ),
  },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
