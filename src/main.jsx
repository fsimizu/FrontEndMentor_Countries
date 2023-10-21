import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './routes/root.jsx';
import { Country } from './routes/country';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './components/ThemeContext/themeContext';


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
