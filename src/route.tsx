import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// admin routes
import Dashboard from "./admin/pages/Dashboard";
import AdminLayout from "./admin/AdminLayout";
import Login from "./admin/pages/Login";

// public pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/service/Services";
import HomePageEditor from "./admin/components/HomePageEditor";
import AboutPageEditor from "./admin/components/AboutPageEditor";
import ContactPageEditor from "./admin/components/ContactPageEditor";
import ServicePageEditor from "./admin/components/ServicePageEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "home",
        element: <HomePageEditor />,
      },
      {
        path: "about",
        element: <AboutPageEditor />,
      },
      {
        path: "contact",
        element: <ContactPageEditor />,
      },
      {
        path: "service",
        element: <ServicePageEditor />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
