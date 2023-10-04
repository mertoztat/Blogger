import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [hiddenPass, setHiddenPass] = useState<boolean>(false);

  const showPass = () => {
    setHiddenPass(!hiddenPass);
  };
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex flex-row-reverse rounded-2xl shadow-lg max-w-6xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              REGISTER
            </h2>
            <p className="text-xs mt-4 text-[#002D74] text-center">
              If you aren't already a member, easily register in
            </p>

            <form className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="username"
                placeholder="Username"
              />
              <input
                className="p-2 rounded-xl border w-full"
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
                Register
              </button>
            </form>

            <div className="mt-3  text-[#002D74] w-full">
              <Link to="/login">
                <button className="w-full bg-gray-800 rounded-xl text-white py-2 hover:scale-105 duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
