// routes.js
import { lazy } from "react";

const AuthRoutes = {
  Login: lazy(() => import("../pages/auth/Login.jsx")),
  Register: lazy(() => import("../pages/auth/Signup.jsx")),
  Reset: lazy(() => import("../pages/auth/Reset.jsx")),
  Forgot: lazy(() => import("../pages/auth/Forgot.jsx")),
  Activate: lazy(() => import("../pages/auth/Activate.jsx")),
};

const DashRoutes = {
  DashboardLayout: lazy(() =>
    import("../../components/layouts/Dashlayout.jsx")
  ),
  ShipmentsLayout: lazy(() => import("../../components/layouts/ShipmentsLayout.jsx")),
  UsersLayout: lazy(() => import("../../components/layouts/UsersLayout.jsx")),

  // users
  AllUsers: lazy(() => import("../pages/dash/users/AllUsers.jsx")),
  DriversManagement: lazy(() => import("../pages/dash/users/DriversManagement.jsx")),
  CustomersManagement: lazy(() => import("../pages/dash/users/CustomersManagement.jsx")),
  StaffManagement: lazy(() => import("../pages/dash/users/StaffManagement.jsx")),

  ShipmentDispatch: lazy(() => import("../pages/dash/shipments/ShipmentDispatch.jsx")),
  ShipmentReceive: lazy(() => import("../pages/dash/shipments/ShipmentReceive.jsx")),
  
  AllShipments: lazy(()=>import("../pages/dash/shipments/AllShipments.jsx")) ,
  TrackingDashboard: lazy(() => import("../pages/dash/shipments/TrackingDashboard.jsx")),
  
  Dashboard: lazy(() => import("../pages/dash/Dashboard.jsx")),
  Profile: lazy(() => import("../pages/dash/Profile.jsx")),

  // Users: lazy(() => import("../Components/pages/dash/Users.jsx")),
};

import Home from "../pages/public/Home.jsx";
import Record from "../pages/public/Record.jsx";
import Doctors from "../pages/public/Doctors.jsx";
import Patients from "../pages/public/Patients.jsx";
import Appointments from "../pages/public/Appointments.jsx";
import Logs from "../pages/public/Doctors.jsx";

// import Training from "../pages/public/training.jsx";
import Error404 from "../pages/utils/Error404.jsx";
import ComingSoon from "../pages/utils/ComminSoon.jsx";

// Route configurations
export const routes = [
  // Public Routes
  { path: "/", element: Home },
  { path: "/records", element: Record },
  { path: "/doctors", element: Doctors },
  { path: "/patients", element: Patients },
  { path: "/appointments", element: Appointments },

  { path: "/logs", element: Logs },

  // authentication routes
  { path: "/login", element: AuthRoutes.Login },
  { path: "/register", element: AuthRoutes.Register },
  { path: "/forgot", element: AuthRoutes.Forgot },
  { path: "/activate/:token", element: AuthRoutes.Activate },
  { path: "/reset/:token", element: AuthRoutes.Reset },

  // Protected Routes
  {
    path: "/profile",
    element: DashRoutes.Profile,
    protected: true,
    allowPendingAccess: true,
  },

  {
    path: "/dashboard/",
    element: DashRoutes.DashboardLayout,
    protected: true,
    roles: ["admin", "manager", "driver", "staff", "customer"],
    children: [
      // Main Dashboard
      {
        path: "",
        element: DashRoutes.Dashboard,
        protected: true,
        roles: ["admin", "manager", "driver", "staff", "customer"],
      },

      // User Profile
      {
        path: "profile",
        element: DashRoutes.Profile,
        protected: true,
        roles: ["admin", "manager", "driver", "staff", "customer"],
      },

      // Shipments (parent route)
      {
        path: "shipments",
        element: DashRoutes.ShipmentsLayout,
        protected: true,
        roles: ["admin", "manager", "driver", "staff"],
        children: [
          {
            path: "",
            element: DashRoutes.AllShipments,
            protected: true,
            roles: ["admin", "manager", "driver", "staff"],
          },
          {
            path: "dispatch",
            element: DashRoutes.ShipmentDispatch,
            protected: true,
            roles: ["admin", "manager", "staff"],
          },
          {
            path: "receive",
            element: DashRoutes.ShipmentReceive,
            protected: true,
            roles: ["admin", "manager", "staff"],
          },
          {
            path: "track",
            element: DashRoutes.TrackingDashboard,
            protected: true,
            roles: ["admin", "manager", "driver", "staff", "customer"],
          },
        ],
      },

      // Assign Shipments (standalone route)
      // {
      //   path: "assign-shipments",
      //   element: DashRoutes.AssignShipments,
      //   protected: true,
      //   roles: ["admin", "manager", "staff"],
      // },

      // Users (parent route)
      {
        path: "users",
        element: DashRoutes.UsersLayout,
        protected: true,
        roles: ["admin"],
        children: [
          {
            path: "",
            element: DashRoutes.AllUsers,
            protected: true,
            roles: ["admin"],
          },
          {
            path: "drivers",
            element: DashRoutes.DriversManagement,
            protected: true,
            roles: ["admin"],
          },
          {
            path: "customers",
            element: DashRoutes.CustomersManagement,
            protected: true,
            roles: ["admin"],
          },
          {
            path: "staff",
            element: DashRoutes.StaffManagement,
            protected: true,
            roles: ["admin"],
          },
        ],
      },

      // Tracking (standalone route)
      {
        path: "tracking",
        element: DashRoutes.TrackingDashboard,
        protected: true,
        roles: ["admin", "manager", "driver", "staff", "customer"],
      },

      // Reports (parent route)
      // {
      //   path: "reports",
      //   element: DashRoutes.ReportsLayout,
      //   protected: true,
      //   roles: ["admin", "manager"],
      //   children: [
      //     {
      //       path: "",
      //       element: DashRoutes.AllReports,
      //       protected: true,
      //       roles: ["admin", "manager"],
      //     },
      //     {
      //       path: "delivery",
      //       element: DashRoutes.DeliveryReports,
      //       protected: true,
      //       roles: ["admin", "manager"],
      //     },
      //     {
      //       path: "financial",
      //       element: DashRoutes.FinancialReports,
      //       protected: true,
      //       roles: ["admin", "manager"],
      //     },
      //   ],
      // },

      // Settings (standalone route)
      {
        path: "settings/profile",
        element: DashRoutes.Profile,
        protected: true,
        roles: ["admin", "manager", "staff"],
      },

      // Fallback for unmatched routes
      { path: "*", element: Error404 },
    ],
  },

  // 404 Route
  { path: "*", element: Error404 },
  { path: "/commingsoon", element: ComingSoon },
];
