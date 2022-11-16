import React, { lazy } from "react";
import {
  HOME_ROUTE,
  REPO_ROUTE
} from "../contents-management/Landing";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Landing = lazy(() => import("../layout/Landing"));
const Home = lazy(() => import("../pages/Home"));
const Repos = lazy(() => import("../pages/Repos"));

const LandingRoutes = () => {
  return (
    <Routes>
      <Route  element={<Landing />}>
        <Route index element={<Navigate to="home" />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={REPO_ROUTE} element={<Repos />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
