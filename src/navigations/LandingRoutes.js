import React, { lazy, useEffect, useState} from "react";
import axios from "axios";
import {
  HOME_ROUTE,
  REPO_ROUTE
} from "../contents-management/Landing";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MyContext from '../context'

const Landing = lazy(() => import("../layout/Landing"));
const Home = lazy(() => import("../pages/Home"));
const Repos = lazy(() => import("../pages/Repos"));

const LandingRoutes = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://api.github.com/users/jahseed89/repos";

  const getRepositories = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <div>
      <MyContext.Provider value={{userData, loading, getRepositories}}>
      <Routes>
        <Route  element={<Landing />}>
          <Route index element={<Navigate to="home" />} />
          <Route path={HOME_ROUTE} element={<Home loading={loading} userData={userData}  />} />
          <Route path={REPO_ROUTE} element={<Repos getRepositories />} />
        </Route>
      </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default LandingRoutes;
