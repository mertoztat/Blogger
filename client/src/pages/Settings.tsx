import axios from "axios";
import Header from "components/Header/Header";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const PF = "http://localhost:4000/images/";

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedUser = {
      userId: getUserInfo?._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      // @ts-ignore
      const filename = Date.now() + file.name;
      console.log("filename", filename);
      data.append("name", filename);
      data.append("file", file);
      // @ts-ignore
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/users/" + getUserInfo?._id, updatedUser);
      console.log("ress", res);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }

    console.log("updatedUser", updatedUser);
  };

  return (
    <>
      <Header />
      <div className="bg-slate-900 min-h-screen ">
        {/* Settings Container */}
        <div className="max-w-7xl mx-auto">
          <h1 className="p-6 font-bold text-2xl text-white">User Settings</h1>
          <div className="flex gap-3 justify-center items-center px-10 ">
            <div className="w-2/3 bg-slate-700/70 h-full rounded-lg ">
              <div className=" flex flex-col p-4">
                <form onSubmit={handleSubmit} className=" flex flex-col p-1">
                  <div className=" w-full flex flex-col  items-center">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
                      alt=""
                      className="w-36  rounded-md"
                    />

                    <label
                      className="flex items-center py-3 px-1  gap-2 w- mt-3 bg-[#ff8a4f] text-white rounded-md cursor-pointer text-xs"
                      htmlFor="fileInput"
                    >
                      <span className="flex items-center mt-0.5  ">
                        <BsFillCloudUploadFill />
                      </span>
                      Change Picture
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e: any) => setFile(e.target.files[0])}
                    />
                  </div>
                  <label className="text-white font-semibold text-md py-4">
                    Username
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="text"
                    placeholder={getUserInfo?.username}
                    name="name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="text-white font-semibold text-md py-4">
                    Email
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="email"
                    name="email"
                    placeholder={getUserInfo?.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="text-white font-semibold text-md py-4">
                    Password
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <button
                      className="py-2 px-4 mt-4 rounded-md bg-[#ff8a4f] text-white text-xs sm:text-sm"
                      type="submit"
                    >
                      Save Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
