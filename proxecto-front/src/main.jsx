import React from 'react'
import { createRoot } from 'react-dom/client'
import {provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {store} from 'app/store'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    { path: '/', element: <App /> }
  ]);

  root.render(
    <React.StrictMode>
      <provider store={store}>
        <RouterProvider router={router} />
      </provider>
    </React.StrictMode>
  );
}else {
  throw new Error(
    'Root element with ID "root" not found in the HTML document.' 
  );
}