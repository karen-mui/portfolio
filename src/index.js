import React from 'react';
import ReactDOM from 'react-dom/client';
// for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

// pages for routing
import About from "./pages/About"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
