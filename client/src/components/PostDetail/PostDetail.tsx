import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import icon from "../../assets/icon.png";
import { getPostDetail } from "services/api";

const PostDetail = () => {
  const [post, setPost] = useState<any>([]);
  const [updatedMode, setUpdatedMode] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const location = useLocation();
  const id = location.pathname.slice(6);
  const navigate = useNavigate();

  const publicFolder = "http://localhost:4000/images/";

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  useEffect(() => {
    const fetchPost = async (id: any) => {
      try {
        const response = await getPostDetail(id);
        setPost(response);
        setDesc(response.desc);
        setTitle(response.title);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost(id);
  }, [id]);

  // console.log("post edit", post);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/posts/${post._id}`,
        {
          data: { username: getUserInfo?.username },
        }
      );

      if (response.status === 200) {
        navigate("/");
      }
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:4000/api/posts/${post._id}`,
      {
        username: getUserInfo?.username,
        title: title,
        desc: desc,
      }
    );
    if (response.status === 200) {
      navigate("/");
    }
    return response;
  };

  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" flex flex-col items-center">
        {post.photo && (
          <img
            className="w-[800px] h-96 rounded-b-lg object-cover"
            src={publicFolder + post?.photo}
            alt=""
          />
        )}
        {updatedMode && (
          <form onSubmit={handleSubmit} className="mt-3">
            <div className=" flex flex-col items-center py-2 px-2 gap-4  ">
              <input
                className="w-full sm:w-[70%]  bg-gray-100 p-2 rounded-md outline-none"
                placeholder="Title"
                type="text"
                autoFocus={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="flex items-center justify-center">
                <textarea
                  className="w-full sm:w-[70%]   border p-1 bg-gray-100 resize-none min-h-[150px] rounded-md outline-none"
                  placeholder="Write your blog post..."
                  autoFocus={true}
                  rows={4}
                  cols={150}
                  name="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <button
                className="p-3 bg-amber-500 text-white rounded-md"
                type="submit"
              >
                Update Your Post
              </button>
            </div>
          </form>
        )}
        {/* edit */}
        <div className="flex justify-between items-center w-full p-6">
          <div className="flex items-center gap-2 ">
            <img src={icon} alt="photos" className="h-12 w-12" />
            <p className="flex flex-col text-gray-500 text-sm">
              <Link to={`/?user=${post?.username}`}>by {post?.username}</Link>
              <p className="text-xs text-gray-500">
                {new Date(post?.createdAt).toDateString()}
              </p>
            </p>
          </div>

          {post?.username === getUserInfo.username && (
            <div className="flex items-center gap-3">
              <span onClick={() => setUpdatedMode(true)}>
                <FaEdit />
              </span>
              <span onClick={handleDelete}>
                <FaTrash />
              </span>
            </div>
          )}
        </div>

        <h1 className="font-bold text-2xl text-center text-black my-2">
          {post?.title}
        </h1>
        <div className="w-full  flex justify-center">
          <p className="w-2/3">{post?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
