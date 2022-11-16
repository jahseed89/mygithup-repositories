import React, { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";


import BrandLoader from "../components/BrandLoader";
import LandingRoutes from "../navigations/LandingRoutes";



const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const GlobalRoutes = () => {
  return (
    <>
      <Suspense fallback={<BrandLoader />}>
        <Routes>
          <Route path={"/*"} element={<LandingRoutes />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default GlobalRoutes;
