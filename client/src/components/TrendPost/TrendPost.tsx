import { useEffect, useState } from "react";

const TrendPost = ({ posts }: any) => {
  const [currentPost, setCurrentPost] = useState<any>(null);
  const publicFolder = "https://blogger-ecru.vercel.app/images/";

  // useEffect(() => {
  //   const updateTrendPost = () => {
  //     const randomIndex = Math.floor(Math.random() * posts?.length);
  //     const randomPost = posts[randomIndex];
  //     setCurrentPost(randomPost);
  //   };

  //   updateTrendPost();
  //   // 1 haftanın mat olarak karşılığı
  //   const interval = setInterval(updateTrendPost, 7 * 24 * 60 * 60 * 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [posts]);

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-4 mb-10 first-letter:text-orange-600 select-none">
        Trending
      </h2>
      <div className="flex-col justify-center w-full  md:flex md:flex-row ">
        <div className="flex justify-center">
          <img
            className="w-full sm:w-[420px] h-[500px] "
            // src={publicFolder + currentPost?.photo}
            src=""
            alt=""
          />
        </div>

        <div className="w-full md:w-1/3 p-10">
          <div className="flex justify-between w-full sm:flex sm:justify-start gap-3 sm:items-center">
            <span className="text-orange-600 font-semibold text-m">
              Natural, Travel
            </span>{" "}
            <span className="text-sm">
              {new Date(currentPost?.createdAt).toDateString()}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold">{currentPost?.title}</h1>
          <p className="my-4">{currentPost?.desc}</p>
          <div className="flex items-center gap-2 justify-end">
            <img
              className="w-[50px] h-[50px]  rounded-full"
              // src={publicFolder + getUserInfo?.photo}
              src=""
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-extrabold">Mars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendPost;
