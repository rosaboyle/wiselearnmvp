import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Mili} from './mili';
import {Helmet} from "react-helmet";

import {
  createBrowserRouter,
  RouterProvider,ßß
} from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

function Home() {
  return <ul>
    <li>
      <Link to={`mili`}>Miligram</Link>
    </li>
    <li>
      <Link to={`watcha/1`}>Your Name</Link>
    </li>
    <li>
      <Link to={`hello`}>Your Friend</Link>
    </li>
  </ul>;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mili",
    element: <Mili />,
  },
  {
    path: "/hello",
    element: <div>Hello 2!</div>,
  },
  {
    path: "/watcha/:id",
    element: <div>Watch!</div>,
  },
]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
