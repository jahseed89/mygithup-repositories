import React, { lazy, useEffect, useState } from "react";
import axios from "axios";
import { HOME_ROUTE, REPO_ROUTE } from "../contents-management/Landing";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import MyContext from "../context";

const Landing = lazy(() => import("../layout/Landing"));
const Home = lazy(() => import("../pages/Home"));
const Repos = lazy(() => import("../pages/Repos"));

const LandingRoutes = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage] = useState(5);
  const url = "https://api.github.com/users/jahseed89/repos?_page1&_limit=5";

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const rest = await axios.get(url);
      setUserData(rest.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // const paginate = () => setCurrentPage();

  // *****Get Current Post
  // const indexOfLastPost = currentPage * postPerPage
  // const indexOfFirstPost = indexOfLastPost - postPerPage
  // const currentPost = userData.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
      <MyContext.Provider value={{ userData, loading }}>
        <Routes>
          <Route element={<Landing />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path={HOME_ROUTE}
              element={<Home loading={loading} userData={userData} />}
            />
            <Route
              path={REPO_ROUTE}
              element={<Repos loading={loading} userData={userData} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default LandingRoutes;
