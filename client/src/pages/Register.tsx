import axios from "axios";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "store/feature/auth/authSlice";
import { AppDispatch } from "store/store";

const Register = () => {
  const navigate = useNavigate();
  const [hiddenPass, setHiddenPass] = useState<boolean>(false);

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const showPass = () => {
    setHiddenPass(!hiddenPass);
  };

  const handleChange = (e: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    dispatch(registerUser(form));
    // try {
    //   const response = await axios.post("/auth/register", {
    //     username: form.username,
    //     password: form.password,
    //     email: form.email,
    //   });
    //   if (response.data && response.status === 200) {
    //     navigate("/login");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <Header />
      <section className="bg-gray-50  flex items-center justify-center  ">
        <div className="bg-gray-200 my-10   flex flex-row-reverse rounded-2xl shadow-lg max-w-6xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              REGISTER
            </h2>
            <p className="text-xs mt-4 text-[#002D74] text-center">
              If you aren't already a member, easily register in
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              <input
                className="p-2 rounded-xl border w-full"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={hiddenPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
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
      <Footer />
    </>
  );
};

export default Register;
