import React, { Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import BrandLoader from "../components/BrandLoader";
import LandingRoutes from "../navigations/LandingRoutes";

const GlobalRoutes = () => {
  return (
    <>
      <Suspense fallback={<BrandLoader />}>
        <Routes>
          <Route path={"/*"} element={<LandingRoutes />} />
          
        </Routes>
      </Suspense>
    </>
  );
};

export default GlobalRoutes;
