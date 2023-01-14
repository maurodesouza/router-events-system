import { createBrowserRouter } from "react-router-dom";
import { Routes } from "types";

import { HomePage, QueriesPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },

  {
    path: Routes.QUERIES,
    element: <QueriesPage />,
  },
]);

