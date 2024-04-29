import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import ErrorPage, { loader as errorLoader } from '~/routes/error-page';
import RootLayout from '~/routes/rootLayout';
import RootIndex, { action as rootAction } from '~/routes/index';
import EmployeeList, {
  loader as employeeListLoader,
} from '~/routes/employee-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <RootIndex />,
            action: rootAction,
          },
          {
            path: '/employee-list',
            element: <EmployeeList />,
            loader: employeeListLoader,
          },
          {
            path: '/*',
            element: <></>,
            loader: errorLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
