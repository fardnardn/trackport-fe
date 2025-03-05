import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaLeaf } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  const userData = useSelector((state) => state.user);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // console.log(userData);
  const location = useLocation();

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // dispatch(setDarkMode(!darkMode)); // Flip the darkMode state
  };
  // console.log(location.pathname !== '/')

  // Track Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
         "sticky bg-emerald-400 dark:bg-emerald-950/90 " // Otherwise, use sticky positioning with a background
      } ${
        isScrolled && " backdrop-blur-md shadow-md" // Scrolled state styles
      } text-gray-900 dark:text-white`}
    >
      {/* Navbar content goes here */}

      {/* <nav
      className={` ${
        location.pathname === "/" ? "abso lute fixed" : "sticky"
      } top-0 z-50 w-full transition-colors ${
        darkMode
          ? "bg-emerald-950 text-white"
          : "bg-tran sparent bg-emerald-100 text-gray-900"
      }`}
    > */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center  dark:text-green-600 font-bold text-xl"
            >
              <FaLeaf className="mr-2" /> track port
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="px-3 py-2 rounded-md font-medium">
                Home
              </NavLink>
              <NavLink to="/about" className="px-3 py-2 rounded-md font-medium">
                About
              </NavLink>

              <NavLink
                to="/contact"
                className="px-3 py-2 rounded-md font-medium"
              >
                Contact
              </NavLink>
              <NavLink to="/Blogs" className="px-3 py-2 rounded-md font-medium">
                Blogs
              </NavLink>
              {!userData.loggedIn ? (
                <Link
                  to="/login"
                  className="px-3 py-2 bg-green-600 hover:!text-white dark:hover:!text-black  rounded-md font-medium"
                >
                  Get-Started
                </Link>
              ) : (
                <Link
                  to="/dashboard/home"
                  className="px-3 py-2 bg-green-600 hover:!text-white dark:hover:!text-black  rounded-md font-medium"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-sm focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>

            <div className="ml-4 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full flex text-center justify-center ${
          isOpen ? "block" : "hidden"
        } dark:bg-emerald-950 bg-gray-100 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </NavLink>

          <NavLink
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </NavLink>
          {!userData.loggedIn ? (
            <Link
              to="/login"
              className="block w-fit px-3 py-2 bg-green-600 hover:!text-white dark:hover:!text-black  rounded-md font-medium"
            >
              {/* <NavLink
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium"
              > */}
              Get-Started
            </Link>
          ) : (
            <Link
              to="/dashboard/home"
              className="block w-fit px-3 py-2 bg-green-600 hover:!text-white dark:hover:!text-black rounded-md font-medium"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
