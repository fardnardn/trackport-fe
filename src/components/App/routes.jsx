// routes.js
import { lazy } from "react";
import { FaSpinner } from "react-icons/fa";



const AuthRoutes = {
  Login: lazy(() => import("../../components/Auth/Login.jsx")),
  Register: lazy(() => import("../../components/Auth/Register.jsx")),
  // Reset: lazy(() => import("../Components/pages/Auth/Reset.jsx")),
  // Forgot: lazy(() => import("../Components/pages/Auth/Forgot.jsx")),
  // Activate: lazy(() => import("../Components/pages/Auth/Activate.jsx")),
};

const DashRoutes = {
  Dashboard: lazy(() => import("../dash/Dashboard.jsx")),
  DashProfile: lazy(() => import("../../components/Auth/DashProfile.jsx")),

  Users: lazy(() => import("../../components/dash/Users.jsx")),
};

import Profiles from "../../components/Auth/Profile.jsx";

import Home from "../../components/public/Home.jsx";
import Contact from "../../components/public/Contact.jsx";
import About from "../../components/public/About.jsx";
import Blogs from "../../components/public/Blogs.jsx";

import Error404 from "../../components/helper/Error404.jsx";
import ComingSoon from "../../components/helper/ComminSoon.jsx";

// Route configurations
export const routeConfig = [
  // Public Routes
  { path: "/", element: Home },
  { path: "/contact", element: Contact },
  { path: "/blogs", element: Blogs },
  { path: "/about", element: About },

  // authentication routes
  { path: "/login", element: AuthRoutes.Login },
  { path: "/register", element: AuthRoutes.Register },
  // { path: "/forgot", element: AuthRoutes.Forgot },
  // { path: "/activate/:token", element: AuthRoutes.Activate },
  // { path: "/reset/:token", element: AuthRoutes.Reset },

  // Protected Routes
  {
    path: "/profile",
    element: Profiles,
    protected: true,
    allowPendingAccess: true,
  },
  // Dashboard Routes
  {
    path: "/dashboard/home",
    element: DashRoutes.Dashboard,
    protected: true,
    roles: ["admin", "user"],
  },
  // {
  //   path: "/dashboard/notifications",
  //   element: DashRoutes.Notifications,
  //   protected: true,
  //   roles: ["admin", "user"],
  // },
  
  // {
  //   path: "/dashboard/reports",
  //   element: DashRoutes.Reports,
  //   protected: true,
  //   roles: ["admin", "user"],
  // },
  {
    path: "/dashboard/users",
    element: DashRoutes.Users,
    protected: true,
    roles: ["admin", "manager"],
  },
  {
    path: "/dashboard/settings",
    element: DashRoutes.DashProfile,
    protected: true,
    roles: ["admin", "manager", "users"],
  },

  // 404 Route
  { path: "*", element: Error404 },
  { path: "/commingsoon", element: ComingSoon },
];

// Loading fallback component
export const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="flex flex-col items-center space-y-4">
      {/* Spinning Icon */}
      <FaSpinner className="animate-spin text-4xl text-blue-600 dark:text-blue-400" />

      {/* Loading Text */}
      <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">
        Loading, please wait...
      </p>

      {/* Skeleton Loader */}
      <div className="w-48 space-y-2">
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-3/4"></div>
      </div>
    </div>
  </div>
);
