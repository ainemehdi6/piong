import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
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
      <Layout>
        <Accueil />
      </Layout>
    ),
  },
  {
    path: MyPaths.ACTUS,
    element: (
      <Layout>
        <Actualites />
      </Layout>
    ),
  },
  {
    path: MyPaths.EVENEMENTS,
    element: (
      <Layout>
        <Evenements />
      </Layout>
    ),
  },
  {
    path: MyPaths.CONTACT,
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: MyPaths.LOGIN,
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: MyPaths.MEETING,
    element: (
      <Layout>
        <Meeting />
      </Layout>
    ),
  },
  {
    path: MyPaths.TOURNAMENT,
    element: (
      <Layout>
        <Tournament />
      </Layout>
    ),
  },
  {
    path: MyPaths.ARTICLE,
    element: (
      <Layout>
        <Article />
      </Layout>
    ),
  },
  {
    path: MyPaths.ADMIN_USER,
    element: (
      <Layout>
        <AdminUser />
      </Layout>
    ),
  },
  {
    path: MyPaths.ADMIN_EVENT,
    element: (
      <Layout>
        <AdminEvent />
      </Layout>
    ),
  },
  {
    path: MyPaths.ADMIN_ARTICLE,
    element: (
      <Layout>
        <AdminArticle />
      </Layout>
    ),
  },
  {
    path: MyPaths.ACCOUNT,
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
  },
]);

function MyRouter() {
  return <RouterProvider router={router} />;
}

export default MyRouter;
