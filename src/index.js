import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Mili } from './mili';
import { Helmet } from "react-helmet";
import { SplitLogin } from './splitlogin';
import { UseMilligram } from './millilib';
import { CardScroller } from './cardscroller';
import { Form } from './form';
import { Leaderboard1 } from './leaderboard';
import { SubmitForm } from './submit';

import {
  createBrowserRouter,
  RouterProvider, ßß
} from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import { MainPage } from './mainpage';

function Home() {
  return <ul>

    <li>
      <Link to={`/mili`}>Miligram</Link>
    </li>
    <li>
      <Link to={`/form`}>Form</Link>
    </li>
    <li>
      <Link to={`/watcha/1`}>Your Name</Link>
    </li>
    <li>
      <Link to={`/hello`}>Your Friend</Link>
    </li>
    <li>
      <Link to={`/splitlogin`}>SplitLogin</Link>
    </li>
    <li>
      <Link to={`/mainpage`}>MainPage</Link>
    </li>
    <li>
      <Link to={`/cards`}>Cards</Link>
    </li>
    <li>
      <Link to={`/leaderboard`}>Leaderboard</Link>
    </li>
    <li>
      <Link to={`/submit`}>Submit Form</Link>
    </li>


  </ul>;
}

const router = createBrowserRouter([
  {
    path: "/content",
    element: <Home />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard1 />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/cards",
    element: <CardScroller />,
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
  {
    path: "/splitlogin/",
    element: <SplitLogin />,
  },
  {
    path: "/mainpage/",
    element: <MainPage />,
  },
  {
    path: "/submit",
    element: <SubmitForm />,
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
