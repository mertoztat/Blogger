import img1 from "assets/log.jpg";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="min-w-screen flex justify-center  ">
      <div className="flex max-w-[1200px] w-full h-[600px]  shadow-2xl text-white rounded-lg overflow-hidden ">
        {/* left */}
        <div className="flex-1  ">
          <img className="w-full h-full" src={img1} alt="" />
        </div>
        {/* right */}
        <div className="flex-1 flex flex-col w-full items-center p-10 ">
          <h1 className="text-5xl font-bold">Login</h1>
          <form className="w-full flex flex-col font-sans">
            <label className="text-black mt-6" htmlFor="email">
              Your Email
            </label>
            <input
              className="p-2 rounded-lg outline-none text-black mt-3 bg-slate-100"
              type="email"
              name="email"
              placeholder="Enter your email"
            />

            <label className="text-black mt-6" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="p-2 rounded-lg outline-none text-black mt-3 w-full bg-slate-100"
                type={clicked ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <div
                onClick={() => setClicked(!clicked)}
                className="cursor-pointer  absolute top-[50%] right-4 translate-y-[-3px]"
              >
                {!clicked ? (
                  <FaEye size={20} color="black" />
                ) : (
                  <FaEyeSlash size={20} color="black" />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-8">
              <button className="px-10 py-2 text-center text-white bg-pink-300 rounded-md">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
