import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import PortfolioPage from './pages/Portfolio.jsx'
import ContactPage from './pages/Contact.jsx'
import ErrorPage from './pages/Error.jsx'
import ResumePage from './pages/Resume.jsx'

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/Home',
        element: <HomePage />,
      },
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
         element: <ResumePage />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
