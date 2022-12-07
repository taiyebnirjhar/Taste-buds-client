import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/img/avatar.webp";
import icon from "../../assets/img/icon.png";
import { AuthContext } from "../../Contexts/AuthFireContext";
import "./Nav.css";

function Navbaralt() {
  /**** states & variables ****/
  const [navToggle, setNavToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  /************************/
  const { user, logOut } = useContext(AuthContext);
  /**** event handler  ****/
  const navToggler = () => {
    setNavToggle((prev) => !prev);
  };
  const profileToggler = () => {
    setProfileToggle((prev) => !prev);
  };
  /************************/

  /**** effects  ****/
  useEffect(() => {}, [navToggler]);
  /************************/

  /**** Additional ***/
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  /******************/
  return (
    <>
      <header className="l-header" id="header">
        {/* main navbar  */}

        <nav className="nav bd-container">
          {/* icon  */}
          <NavLink to={"/"}>
            <div
              className="nav__logo active-link"
              onClick={() => setNavToggle(false)}
            >
              <span>
                <img
                  src={icon}
                  alt="icon"
                  className=" sm:min-w-[8%] w-10  inline mb-2"
                />
              </span>
              Taste Buds
            </div>
          </NavLink>

          {/* nav link */}
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to={"/home"}>
                  <div className="nav__link">Home</div>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={"/menu"}>
                  <div className="nav__link">Menu</div>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={"/blog"}>
                  <div className="nav__link">Blog</div>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to={"/services"}>
                  <div className="nav__link">Add services</div>
                </NavLink>
              </li>
              {!user ? (
                <li className="nav__item">
                  <NavLink to={"login"}>
                    <div className="nav__link">Login</div>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="flex flex-row gap-4">
            {user && user.uid ? (
              <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-3">
                  {/*  */}
                  <div onClick={profileToggler}>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-400"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-6 w-6 md:h-8 md:w-8 rounded-full"
                        src={user.photoURL || avatar}
                        alt=""
                      />
                    </button>
                  </div>

                  {profileToggle && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                    >
                      <p
                        className=" text-end px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                        onClick={profileToggler}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </p>
                      <Link to="/myReviews">
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                        >
                          my reviews
                        </div>
                      </Link>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                        onClick={logOut}
                      >
                        Sign out
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="nav__toggle md:hidden inline" id="nav-toggle">
              {!navToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className=" h-6 w-6 navToggleIcon"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  onClick={navToggler}
                >
                  <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
                </svg>
              ) : (
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  onClick={navToggler}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </nav>

        {/* side bar  */}

        {navToggle && (
          <div className="bg-green-400 py-6" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavLink to={"Home"}>
                <div
                  className=" text-gray-100  hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                  onClick={navToggler}
                >
                  Home
                </div>
              </NavLink>
              <NavLink to={"Menu"}>
                <div
                  className="text-gray-100  hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={navToggler}
                >
                  Menu
                </div>
              </NavLink>
              <NavLink to={"Blog"}>
                <div
                  className="text-gray-100  hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={navToggler}
                >
                  Blog
                </div>
              </NavLink>
              <NavLink to={"services"}>
                <div
                  className="text-gray-100  hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={navToggler}
                >
                  Add services
                </div>
              </NavLink>
              {!user && (
                <NavLink to={"login"}>
                  <div
                    className="text-gray-100  hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={navToggler}
                  >
                    Log in
                  </div>
                </NavLink>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbaralt;
