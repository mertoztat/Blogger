import logo from "assets/blogger2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
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
            <Link to="/write_post">
              <li className="cursor-pointer text-lg ">Post</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <Link to={`/login`}>
              <li className="cursor-pointer text-lg ">Login</li>
            </Link>
            <Link to={`/register`}>
              <li className="cursor-pointer text-lg ">Register</li>
            </Link>
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
