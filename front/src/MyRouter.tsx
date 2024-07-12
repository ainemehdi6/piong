import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import MyPaths from "./MyPaths";
import Login from "./pages/Login";
import Meeting from "./pages/Meeting";
import Tournament from "./pages/Tournament";
import Article from "./pages/Article";
import AdminUser from "./pages/AdminUser";
import AdminEvent from "./pages/AdminEvent";
import AdminArticle from "./pages/AdminArticle";
import Account from "./pages/Account";
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
  {
    path: MyPaths.MEETING,
    element: (
      <PublicLayout>
        <Meeting />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.TOURNAMENT,
    element: (
      <PublicLayout>
        <Tournament />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.ARTICLE,
    element: (
      <PublicLayout>
        <Article />
      </PublicLayout>
    ),
  },
  {
    path: MyPaths.ADMIN_USER,
    element: (
      <AdminLayout>
        <AdminUser />
      </AdminLayout>
    ),
  },
  {
    path: MyPaths.ADMIN_EVENT,
    element: (
      <AdminLayout>
        <AdminEvent />
      </AdminLayout>
    ),
  },
  {
    path: MyPaths.ADMIN_ARTICLE,
    element: (
      <AdminLayout>
        <AdminArticle />
      </AdminLayout>
    ),
  },
  {
    path: MyPaths.ACCOUNT,
    element: (
      <AdminLayout>
        <Account />
      </AdminLayout>
    ),
  },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
