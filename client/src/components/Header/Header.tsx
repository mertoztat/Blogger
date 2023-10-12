import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "assets/blogger2.png";
import user_img from "assets/profile.jpg";
import Dropdown from "components/UI/Dropdown";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  const handleClick = () => {
    setHamburger(!hamburger);
  };

  const hideDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header className="flex items-center justify-between px-10 py-4 gap-4 w-full">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
        {/* desktop nav start */}
        <div className="hidden sm:block">
          <ul className="flex gap-4">
            <Link to="/">
              <li className="cursor-pointer text-lg ">Home</li>
            </Link>
            <li className="cursor-pointer text-lg ">About</li>
            <li className="cursor-pointer text-lg ">Contact</li>
            {getUserInfo && (
              <Link to="/write_post">
                <li className="cursor-pointer text-lg ">Post</li>
              </Link>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            {getUserInfo ? (
              <div className="flex items-center gap-2 relative">
                <img
                  src={user_img}
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <button
                  className="text-white bg-gray-700 hover:bg-gray-600  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={hideDropdown}
                >
                  {getUserInfo?.username}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {showDropdown && <Dropdown getUserInfo={getUserInfo} />}
              </div>
            ) : (
              <>
                <Link to={`/login`}>
                  <li className="cursor-pointer text-lg ">Login</li>
                </Link>
                <Link to={`/register`}>
                  <li className="cursor-pointer text-lg ">Register</li>
                </Link>{" "}
              </>
            )}
          </ul>
          {/* desktop nav end */}

          {/* mobile nav start */}
          {!hamburger ? (
            <span className="sm:hidden cursor-pointer  " onClick={handleClick}>
              <FaBars />
            </span>
          ) : (
            <>
              <div className="fixed inset-0 bg-gray-200 flex flex-col items-center pt-[150px]">
                <span
                  className="cursor-pointer absolute top-11 right-10 text-xl"
                  onClick={handleClick}
                >
                  <FaTimes />
                </span>
                <ul className="flex flex-col gap-4 text-black border items-center ">
                  <li className="cursor-pointer text-lg  hover:border-b-2 hover:border-orange-400 duration-150">
                    Home
                  </li>
                  <li className="cursor-pointer text-lg  hover:border-b-2 hover:border-orange-400 duration-150">
                    About
                  </li>
                  <li className="cursor-pointer text-lg  hover:border-b-2 hover:border-orange-400 duration-150">
                    Post
                  </li>
                  <li className="cursor-pointer text-lg  hover:border-b-2 hover:border-orange-400 duration-150">
                    Contact
                  </li>
                </ul>
              </div>
            </>
          )}
          {/* mobile nav end */}
        </div>
      </header>
    </>
  );
};

export default Header;
