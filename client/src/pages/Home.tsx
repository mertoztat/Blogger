import TrendPost from "../components/TrendPost/TrendPost";
import Header from "../components/Header/Header";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Footer from "components/Footer/Footer";
import { useEffect, useState } from "react";
import { getAllPost } from "../services/api";

interface IProps {
  id?: string;
  title?: string;
  desc?: string;
  username?: string;
  categories?: string[];
  createdAt?: string;
  updatedAt?: string;
  image?: string;
}

const Home: React.FC<IProps> = () => {
  const [posts, setPosts] = useState([]);

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
  }, []);

  return (
    <>
      <Header />
      <TrendPost />
      <LatestPosts posts={posts} />
      <Footer />
    </>
  );
};

export default Home;
