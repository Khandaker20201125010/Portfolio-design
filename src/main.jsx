import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import Skills from './Pages/Skills/Skills';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>

      },
      {
        path: "/projects",
        element:<Projects></Projects>

      },
      {
        path: "/experience",
        element:<Experience></Experience>

      },
      {
        path: "/skills",
        element:<Skills></Skills>

      },
      {
        path: "/about",
        element:<About></About>

      },
      {
        path: "/contact",
        element:<Contact></Contact>

      },
   
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
