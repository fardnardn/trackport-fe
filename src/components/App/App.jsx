import React, { useEffect, Suspense,useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ProtectedRoute from "../App/ProtectedRoute.jsx"
// import Navbar from "../Components/others/Navbar.jsx";

import Navbar from "../helper/Navbar.jsx";
import DashNav from "../helper/DashNav.jsx";
import Footer from "../helper/Footer.jsx";

import "../../assets/css/App.css";
import { routeConfig, Loader } from "./routes";
import { getCurrentUser } from "../../requests/auth.js";

export default function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Runs when the pathname changes


  // useEffect(() => {
  //   if (loggedIn === false) {
  //     const getUser = async () => {
  //       await getCurrentUser(dispatch);
  //     };
  //     getUser();
  //   }
  // }, []);

  const renderRoute = (route) => {
    const RouteComponent = route.element;

    if (route.protected) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              allowedRoles={route.roles || []}
              allowPendingAccess={route.allowPendingAccess}
            >
              <Suspense fallback={<Loader />}>
                <RouteComponent />
              </Suspense>
            </ProtectedRoute>
          }
        />
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<Loader />}>
            <RouteComponent />
          </Suspense>
        }
      />
    );
  };

  return (
    <div className={`${darkMode ? "dark " : ""} `}>
      {isDashboard ? <DashNav /> : <Navbar />}

      <div className=" dark:bg-green-800  bg-green-400 min-h-screen ">
        <Routes>{routeConfig.map(renderRoute)}</Routes>
      </div>
      <Footer />

    </div>
  );
}
