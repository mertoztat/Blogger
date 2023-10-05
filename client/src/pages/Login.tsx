import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [hiddenPass, setHiddenPass] = useState<boolean>(false);

  const showPass = () => {
    setHiddenPass(!hiddenPass);
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-6xl p-5 items-center relative">
          <span className="absolute top-6 left-3  hover:transition hover:scale-105 hover:duration-300 ease-in-out">
            <Link to="/">
              <FaArrowLeft
                className="bg-[#ff8a4f] p-2.5 rounded-full text-white cursor-pointer  "
                size={40}
              />
            </Link>
          </span>
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              Login
            </h2>
            <p className="text-xs mt-4 text-[#002D74] text-center">
              If you are already a member, easily log in
            </p>

            <form className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={hiddenPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <span
                  onClick={showPass}
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                >
                  {hiddenPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button className="bg-[#ff8a4f] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <Link to="/register">
                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 ">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2796&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
