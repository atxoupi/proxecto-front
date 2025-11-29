import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import './index.css'

import App from './App.jsx';
import Sobremi from './pages/sobremi/index.jsx';
import Layout from './layout/Layout.jsx';
import LoginPage from './pages/login/index.jsx';

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // layout con menú
      children: [
        { index: true, element: <App /> },
        { path: 'sobremi', element: <Sobremi /> },
        { path: 'login', element: <LoginPage /> },
        // Puedes añadir más rutas aquí
      ],
    },
  ]);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<div>Cargando...</div>} />
      </Provider>
    </React.StrictMode>
  );
}else {
  throw new Error(
    'Root element with ID "root" not found in the HTML document.' 
  );
}