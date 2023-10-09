import axios from "axios";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";

const WritePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newPost = {
      username: getUserInfo.username,
      title,
      desc,
    };
    // @ts-ignore
    if (file) {
      const data = new FormData();
      // @ts-ignore
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      // @ts-ignore
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        {file && (
          <img
            className="w-full h-96 rounded-lg"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
        <form onSubmit={handleSubmit} className="">
          <div className=" flex flex-col items-center py-2 px-2 gap-4  ">
            <label htmlFor="fileInput">
              <BsCardImage size={30} color="gray" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e: any) => setFile(e.target.files[0])}
            />
            <input
              className="w-full sm:w-[70%]  bg-gray-100 p-2 rounded-md outline-none"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex items-center justify-center">
              <textarea
                className="w-full sm:w-[70%]   border p-1 bg-gray-100 resize-none min-h-[150px] rounded-md outline-none"
                placeholder="Write your blog post..."
                autoFocus={true}
                rows={4}
                cols={150}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <button
              className="p-3 bg-amber-500 text-white rounded-md"
              type="submit"
            >
              Send Your Post
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default WritePost;
