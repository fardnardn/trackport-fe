import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const ShipmentsLayout = () => {
  return (
    <div className="contai ner p-9 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Shipments</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage all your shipments
        </p>
      </div>

      {/* Secondary navigation (tabs) for shipment section */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-4">
          <NavLink
            to="/dashboard/shipments"
            end
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-transparent text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`
            }
          >
            All Shipments
          </NavLink>

          <NavLink
            to="/dashboard/shipments/dispatch"
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-transparent text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`
            }
          >
            Dispatch
          </NavLink>

          <NavLink
            to="/dashboard/shipments/receive"
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-transparent text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`
            }
          >
            Receive
          </NavLink>

          <NavLink
            to="/dashboard/shipments/track"
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? "border-teal-500 text-teal-600 dark:text-teal-400"
                  : "border-transparent text-gray-500 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`
            }
          >
            Track
          </NavLink>
        </nav>
      </div>

      {/* Child routes will render here */}
      <Outlet />
    </div>
  );
};

export default ShipmentsLayout;
