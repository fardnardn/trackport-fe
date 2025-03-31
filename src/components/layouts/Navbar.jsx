import React, { useState } from "react";
import { NavLink,Link, useLocation,useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, User, LogOut, PackageSearch } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { useUserStore } from "@/store/useUserStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const { darkMode, toggleDarkMode, user, loggedIn, logOut } = useUserStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Updated Navigation for Tracking System
  const navItems = [
    { name: "Features", id: "features" },
    { name: "How it Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
  ];

const scrollToSection = (id) => {
  // Small timeout to ensure DOM is ready
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      // More reliable scroll method
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust for fixed header
        behavior: "smooth",
      });
    }
  }, 50);
};

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b ${
        darkMode
          ? "bg-gray-900 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <PackageSearch className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl ml-2">
                Track
                <span className="text-rose-600 dark:text-rose-400">Port</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  // to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium `}
                >
                  {item.name}
                </NavLink>
              ))}
              {/* {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.name}
                </button>
              ))} */}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </Button>

            {loggedIn ? (
              <div className="flex gap-2 items-center">
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium dark:bg-green-600 dark:hover:bg-green-700 bg-green-500 hover:bg-green-600"
                >
                  <User size={16} className="mr-1" />
                  Dash
                </Link>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={()=>logOut(navigate)}
                  className="ml-auto"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full mr-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 backdrop-blur-md shadow-md z-50 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                // to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium `}
                onClick={() => {
                  scrollToSection(item.id);
                  toggleMenu(); // Close menu on click
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Section */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            {loggedIn ? (
              <div className="flex items-center px-5">
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium dark:bg-green-600 dark:hover:bg-green-700 bg-green-500 hover:bg-green-600"
                  onClick={toggleMenu}
                >
                  <User size={16} className="mr-1" />
                  Dashboard
                </Link>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={()=>logOut(navigate)}
                  className="ml-auto"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            ) : (
              <div className="px-5">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-center bg-blue-500 text-white hover:bg-blue-600"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
