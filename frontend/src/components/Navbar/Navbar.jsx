

import React, { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setVisible(true); // Always show navbar on other pages
      return;
    }

    // Reset visibility when coming back to the home page
    setVisible(false);

    const handleScroll = () => {
      const halfwayPoint = window.innerHeight / 3;
      setVisible(window.scrollY > halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full bg-white shadow-md  py-4 px-4 md:px-10 flex justify-between items-center transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img src={assets.logo} alt="Logo" className="w-36 md:w-40" />
      </NavLink>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-black text-xl">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "border-b-2 border-orange-600 pb-1"
                    : "hover:text-orange-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section (Search, Cart, Profile) */}
      <div className="flex items-center space-x-6 max-md:space-x-4 max-md:pl-6">
        <IoSearchOutline className="text-3xl text-black cursor-pointer hover:text-orange-500" />
        <div className="relative">
          <NavLink to="/cart">
            <IoBagHandleOutline className="text-3xl text-black cursor-pointer  hover:text-orange-500 " />
          </NavLink>
          {getTotalCartAmount() !== 0 && (
            <div className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></div>
          )}
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="border border-orange-500 text-black px-2 py-2 max-md:py-1 rounded-full max-md:rounded-md max-md:text-base transition hover:bg-white hover:text-black"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <CgProfile className="text-3xl text-black cursor-pointer  hover:text-orange-500  " />
            <ul className="absolute right-0 top-7 hidden group-hover:flex flex-col bg-white shadow-lg border border-red-500 rounded-md px-5 w-40 py-3 space-y-3">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
              >
                <img src={assets.bag_icon} alt="Orders" className="w-5" />
                <p>My Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center space-x-2 cursor-pointer hover:text-red-500"
              >
                <img src={assets.logout_icon} alt="Logout" className="w-5" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
