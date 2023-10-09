import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import icon from "../../assets/icon.png";
import { getPostDetail } from "services/api";

const PostDetail = () => {
  const [post, setPost] = useState<any>([]);
  const location = useLocation();
  const id = location.pathname.slice(6);

  const publicFolder = "http://localhost:4000/images/";

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  useEffect(() => {
    const fetch = async (id: any) => {
      try {
        const response = await getPostDetail(id);
        setPost(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetch(id);
  }, [id]);

  console.log("post detail", post);

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
              <span>
                <FaEdit />
              </span>
              <span>
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
