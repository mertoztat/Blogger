import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  getUserInfo: any;
}

const Dropdown: React.FC<IProps> = ({ getUserInfo }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut) {
      localStorage.removeItem("user");
      window.location.assign("/");
    }
  }, [isLoggedOut]);

  const logout = () => {
    setIsLoggedOut(true);
  };

  return (
    <>
      <div
        className="absolute top-10 right-0 bg-[#ff8a4ff4] text-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
        id="dropdown"
      >
        <div className="px-4 py-3 w-44">
          <span className="block text-sm">{getUserInfo?.username}</span>
          <span className="block text-sm font-medium text-white truncate">
            {getUserInfo?.email}
          </span>
        </div>
        <ul aria-labelledby="dropdown">
          <Link to={`/blog/${getUserInfo?.username}`}>
            <li className="text-sm hover:bg-gray-700 text-white block px-4 py-2 cursor-pointer">
              My Blogs
            </li>
          </Link>
          {getUserInfo && (
            <Link to={`/settings/${getUserInfo?.username}`}>
              <li className="text-sm hover:bg-gray-700 text-white block px-4 py-2 cursor-pointer">
                Settings
              </li>
            </Link>
          )}

          <li
            className="text-sm hover:bg-gray-700 text-white block px-4 py-2 cursor-pointer"
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
