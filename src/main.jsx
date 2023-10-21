import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './components/ThemeContext/themeContext';
import './index.css';
import { Country } from './routes/country';
import { Root } from './routes/root.jsx';


const router = createHashRouter([
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
