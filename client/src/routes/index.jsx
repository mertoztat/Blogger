import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import WritePost from "pages/WritePost";
import PostDetail from "components/PostDetail/PostDetail";
import Settings from "pages/Settings";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write_post" element={<WritePost />} />
        <Route path="/post/:post_id" element={<PostDetail />} />
        <Route path="/settings/:username" element={<Settings />} />
      </Routes>
    </>
  );
};

export default Routers;
