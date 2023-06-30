import TrendPost from "components/TrendPost/TrendPost";
import Header from "./components/Header/Header";
import LatestPosts from "components/LatestPosts/LatestPosts";

const App = () => {
  return (
    <div>
      <Header />
      <TrendPost />
      <LatestPosts />
    </div>
  );
};

export default App;
