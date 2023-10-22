import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './components/ThemeContext/themeContext';
import './index.css';
import { Country } from './routes/country';
import { Root } from './routes/root.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/country/:id",
    element: <Country />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
