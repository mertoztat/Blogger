import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import WritePost from "pages/WritePost";
import PostDetail from "components/PostDetail/PostDetail";
import Settings from "pages/Settings";
import { useSelector } from "react-redux";

const Routers = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {userInfo.length > 0 && (
          <>
            <Route path="/write_post" element={<WritePost />} />
            <Route path="/post/:post_id" element={<PostDetail />} />
            <Route path="/settings/:username" element={<Settings />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Routers;
