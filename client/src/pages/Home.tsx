import TrendPost from "../components/TrendPost/TrendPost";
import Header from "../components/Header/Header";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Footer from "components/Footer/Footer";
import { useEffect, useState } from "react";
import { getAllPost, getUserPost } from "../services/api";
import { useLocation } from "react-router-dom";

interface IProps {
  id?: string;
  desc?: string;
  title?: string;
  username?: string;
  categories?: string[];
  createdAt?: string;
  updatedAt?: string;
  image?: string;
}

const Home: React.FC<IProps> = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPost();
        setPosts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Header />
      <TrendPost posts={posts} />
      <LatestPosts posts={posts} />
      <Footer />
    </>
  );
};

export default Home;
