import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import "./index.css";

import App from "./App.jsx";
import Sobremi from "./pages/sobremi/index.jsx";
import Layout from "./layout/Layout.jsx";
import LoginPage from "./pages/login/index.jsx";
import TalleresPage from "./pages/talleres/index.jsx";
import EcsPage from "./pages/ecs/index.jsx";
import AdminPage from "./pages/admin/index.jsx";
import ContactPage from "./pages/contact/index.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <App /> },
        { path: "sobremi", element: <Sobremi /> },
        { path: "login", element: <LoginPage /> },
        { path: "talleres", element: <TalleresPage /> },
        { path: "ecs", element: <EcsPage /> },
        { path: "contacto", element: <ContactPage /> },
        {
          element: <ProtectedRoute />,
          children: [{ path: "admin", element: <AdminPage /> }],
        },
      ],
    },
  ]);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider
          router={router}
          fallbackElement={<div>Cargando...</div>}
        />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    'Root element with ID "root" not found in the HTML document.'
  );
}
