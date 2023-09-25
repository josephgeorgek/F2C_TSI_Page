import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Desktop = React.lazy(() => import("pages/Desktop"));
const BCCLandingCardHolder = React.lazy(
  () => import("pages/BCCLandingCardHolder"),
);
const ApplyCard = React.lazy(() => import("pages/ApplyCard"));
const ApplyCardTwo = React.lazy(() => import("pages/ApplyCardTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ApplyCardTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/applycard" element={<ApplyCard />} />
          <Route
            path="/bcclandingcardholder"
            element={<BCCLandingCardHolder />}
          />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
