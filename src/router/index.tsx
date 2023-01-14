import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { Routes } from "types";

import { HomePage, QueriesPage } from '../pages'

export const Router = () => {
  return (
    <RoutesWrapper>
      <Route path={Routes.HOME} element={<HomePage />} />
      <Route path={Routes.QUERIES} element={<QueriesPage />} />
    </RoutesWrapper>
  )
}
