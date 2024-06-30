// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom"
// import About from './Components/About.jsx'
// import Layout from './Layout.jsx';
// import Contact from './Components/Contact/Contact.jsx'
// import Exams from './Components/Exams/Exams.jsx'
// import Learning from './Components/Learning.jsx'
// import English from './Components/Languages/English.jsx'
// import TnIServices from './Components/Services/TnIService.jsx'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//     {
//       path: "",
//       element: <App />
//     },
//     {
//       path: "/About",
//       element: <About />
//     },
//     {
//       path: "/Contact",
//       element: <Contact />
//     },
//     {
//       path: "/Exams",
//       element: <Exams />
//     },
//     {
//       path: "/Learn",
//       // element: <Layout />,
//       children: [
//         {
//           path: "English",
//           element: <English />
//         },
//         // {
//         //   path: ":id",
//         //   element: <Learning />
//         // },
//       ]
//     },
//     {
//       path: "/TniService",
//       element: <TnIServices />
 
//     }
    
//   ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={route} />
//   </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import About from './Components/About.jsx';
import Layout from './Layout.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Exams from './Components/Exams/Exams.jsx';
import Learning from './Components/Learning.jsx';
import Language from './Components/Languages/Language.jsx';
import TnIServices from './Components/Services/TnIService.jsx';
// main.jsx or your main React component file
import '@fortawesome/fontawesome-free/css/all.css';



const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Exams',
        element: <Exams />,
      },
      {
        path: '/Learn',
        children: [
          {
            path: ':id', // Dynamic route parameter for language ID
            element: <Language />,
          },
        ],
      },
      {
        path: '/Service',
        children: [
          {
            path: ':id', // Dynamic route parameter for service ID
            element: <TnIServices />,
          },
        ]
      
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
