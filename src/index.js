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
import {RegisterForm} from './register';
import {RegisterTeam} from './registerteam';
import {Sponsors} from './sponsors';
import {BankPage} from './blankcookie';
import FileUpload from './fileupload';

import {
  createBrowserRouter,
  RouterProvider, ßß
} from "react-router-dom";

import { Outlet, Link } from "react-router-dom";
import { MainPage } from './mainpage';

function Home() {
  return <ul>

    <li>
      <Link to={`/app/mili`}>Miligram</Link>
    </li>

    <li>
      <Link to={`/app/form`}>Form</Link>
    </li>
    <li>
      <Link to={`/app/watcha/1`}>Your Name</Link>
    </li>
    <li>
      <Link to={`/app/hello`}>Your Friend</Link>
    </li>
    <li>
      <Link to={`/app/splitlogin`}>SplitLogin</Link>
    </li>
    <li>
      <Link to={`/app/mainpage`}>MainPage</Link>
    </li>
    <li>
      <Link to={`/app/cards`}>Cards</Link>
    </li>
    <li>
      <Link to={`/app/leaderboard`}>Leaderboard</Link>
    </li>
    <li>
      <Link to={`/app/submit`}>Submit Form</Link>
    </li>
    <li>
      <Link to={`/app/register`}>Register</Link>
    </li>
    <li>
      <Link to={`/app/registerteam`}>Register Team</Link>
    </li>
    <li>
      <Link to={`/app/sponsors`}>Sponsors</Link>
    </li>
    <li>
      <Link to={`/app/fileupload`}>File Upload</Link>
    </li>
    <li>
      <Link to={`/app/content`}>Content</Link>
    </li>
    <li>
      <Link to={`/app/bank`}>Blank Page</Link>
    </li>

  </ul>;
}

const router = createBrowserRouter([
  {
    path: "/app/content",
    element: <Home />,
  },
  {
    path: "/app/leaderboard",
    element: <Leaderboard1 />,
  },
  {
    path: "/app/form",
    element: <Form />,
  },
  {
    path: "/app/cards",
    element: <CardScroller />,
  },
  {
    path: "/app/",
    element: <Mili />,
  },
  {
    path: "/app/hello",
    element: <div>Hello 2!</div>,
  },
  {
    path: "/app/watcha/:id",
    element: <div>Watch!</div>,
  },
  {
    path: "/app/splitlogin/",
    element: <SplitLogin />,
  },
  {
    path: "/app/mainpage/",
    element: <MainPage />,
  },
  {
    path: "/app/submit",
    element: <SubmitForm />,
  },
  {
    path: "/app/registerteam",
    element: <RegisterTeam />,
  },
  


  {
    path: "/app/register",
    element: <RegisterForm />,
  },
  {
    path: "/app/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/app/fileupload",
    element: <FileUpload />,
  },
  
  {
    path: "/app/bank",
    element: <BankPage />,
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
