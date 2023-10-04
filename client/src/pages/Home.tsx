import TrendPost from "../components/TrendPost/TrendPost";
import Header from "../components/Header/Header";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Footer from "components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <TrendPost />
      <LatestPosts />
      <Footer />
    </>
  );
};

export default Home;
