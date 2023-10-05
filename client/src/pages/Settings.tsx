import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { BsFillCloudUploadFill } from "react-icons/bs";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-900 min-h-screen ">
        {/* Settings Container */}
        <div className="max-w-7xl mx-auto">
          <h1 className="p-6 font-bold text-2xl text-white">User Settings</h1>

          <div className="flex gap-3 justify-center items-center px-10 ">
            <div className="hidden sm:block w-1/3 bg-slate-700/70 h-[350px] rounded-md p-6">
              <label className="text-white mt-12">Profile Picture</label>
              <div className="w-full flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
                  alt=""
                  className="w-36 h-36 rounded-md"
                />

                <label
                  className="flex items-center py-3 px-1  gap-2 w-36 mt-3 bg-[#ff8a4f] text-white rounded-md cursor-pointer"
                  htmlFor="fileInput"
                >
                  <span className="flex items-center mt-0.5 ">
                    <BsFillCloudUploadFill />
                  </span>
                  Change Picture
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className=""
                />
              </div>
            </div>

            <div className="w-2/3 bg-slate-700/70 h-full rounded-lg ">
              <div className=" flex flex-col p-4">
                <form className=" flex flex-col p-1">
                  <div className="sm:hidden w-full flex flex-col  items-center">
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
                      className=""
                    />
                  </div>
                  <label className="text-white font-semibold text-md py-4">
                    Username
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="text"
                    placeholder="Mert"
                    name="name"
                  />
                  <label className="text-white font-semibold text-md py-4">
                    Email
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="email"
                    placeholder="mert@gmail.com"
                    name="email"
                  />
                  <label className="text-white font-semibold text-md py-4">
                    Password
                  </label>
                  <input
                    className="p-2.5 outline-none bg-gray-700/60 rounded-lg text-white/70 placeholder:text-white/20"
                    type="password"
                    placeholder="Password"
                    name="password"
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
