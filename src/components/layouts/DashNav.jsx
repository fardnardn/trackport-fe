import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  Home,
  FileText,
  Package,
  Mail,
  User,
} from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "sonner";

import { Bell, ShoppingCart, Search, Settings } from "lucide-react";

const DashNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, loggedIn, logOut } = useUserStore();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    toast("Are you sure you want to logout?", {
      action: {
        label: "Confirm",
        onClick: () => {
          toast.success("Logged out successfully");
          logOut(); // Your logout function
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.dismiss(),
      },
      duration: Infinity, // Stays until user acts
    });
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "My Tenders",
      path: "/dashboard/tenders",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "My Product",
      path: "/dashboard/products",
      icon: <Package className="w-5 h-5" />,
    },
    {
      name: "Subscription",
      path: "/dashboard/subscriptions",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "My Profile",
      path: "/dashboard/profile",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Mobile */}
      <nav className="sticky top-0 z-20 w-full border-b  bg-white lg:h idden">
        <div className="sticky px-4 sm:px-6">
          {/* Sidebar - Mobile overlay */}
          {/* <nav className="fixed  top-0 z-10 w-full border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
        <div className="px-4 sm:px-6 lg:px-8">
           */}
          <div className="flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <span className="text-2xl font-bold">
                  <span className="font-bold text-navy-900">Tender</span>{" "}
                  <span className="text-green-500 font-bold">Hub</span>
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:h idden inline-flex items-center justify-center rounded-md text-gray-500"
              >
                <Menu size={24} />
              </Button>
            </div>

            <div className="flex items-center space-x-5">
              {/* Cart */}
              <button className="text-gray-500 hover:text-gray-700 transition-colors relative bg-gray-50 p-2 rounded-full">
                <ShoppingCart size={20} />
              </button>

              {/* Notification */}
              <button className="text-gray-500 hover:text-gray-700 transition-colors relative bg-gray-50 p-2 rounded-full">
                <Bell size={20} />
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span> */}
              </button>

              <div className="flex items-center">
                <button className="flex items-center space-x-2  p-1 pl-1 pr-3 rounded-full  transition-colors">
                  {loggedIn ? (
                    <Avatar className="h-8 w-8 border-2 border-white">
                      <AvatarImage
                        src={user?.photoUrl || ""}
                        alt={user?.name || "User"}
                      />
                      <AvatarFallback>
                        {user?.email?.charAt(0) ||
                          user?.email?.charAt(0) ||
                          "U"}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-green-500 text-white"
                    >
                      Login
                    </Link>
                  )}
                  {/*  */}
                </button>
              </div>
            </div>

            {/* Right */}
          </div>
        </div>
      </nav>

      {/* Dark overlay */}
      {/* <div
        className={`fixed inset-0 z-40 bg-bla ck/30 bg-opacity-90 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      /> */}

      <aside
        className={`h-full w-64 bg-gray-100 fixed top-0 left-0 z-30 transform transition-transform duration-300 ease-in-out 
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:tran slate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-gray-100">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold cursor-pointer">
              <span className="font-bold text-navy-900">Tender</span>{" "}
              <span className="text-green-500 font-bold">Hub</span>
            </Link>
            {/* <span className="text-2xl font-bold">
              <span className="font-bold text-navy-900">Tender</span>{" "}
              <span className="text-green-500 font-bold">Hub</span>
            </span> */}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className=""
          >
            <X size={24} />
          </Button>
        </div>

        <div className="mt-8 px-4">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div
                    className={`${
                      isActive ? "text-white" : "text-gray-500"
                    } mr-3`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`font-medium text-sm ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            <Button
              variant="destructive"
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2.5 rounded-lg   transition-colors mt-4"
            >
              <LogOut className="w-5 h-5 mr-2" />

              <span className="font-medium text-sm">Log Out</span>
            </Button>
          </nav>
        </div>
      </aside>

      <div className="hidden lg:block lg:w-64 flex-shrink-0"></div>
    </>
  );
};

export default DashNav;
