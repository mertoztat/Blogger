import { Link } from "react-router-dom";

const LatestPosts = ({ posts }: any) => {
  // const publicFolder = "https://blogger-ecru.vercel.app/images/";

  const getUserInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  const sortedDate = posts?.sort((a: any, b: any) => {
    const dateA: any = new Date(a.createdAt);
    const dateB: any = new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <>
      <div className="text-center mt-3 ">
        <span className="inline-block text-center text-4xl font-bold mt-4 mb-10 first-letter:text-orange-600 pr-1 select-none   ">
          Latest
        </span>
        <span className="inline-block text-center text-4xl font-bold mt-4 mb-10 first-letter:text-orange-600 select-none ">
          Posts
        </span>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid w-full  md:grid-cols-2  md:px-20 lg:grid-cols-3 gap-4  ">
          {sortedDate?.map((item: any, index: number) => (
            <div key={index}>
              <div className="w-full  flex flex-col justify-center md:max-w-[390px] sm:bg-white">
                {item.photo && (
                  <img
                    className="w-full md:w-[400px] md:object-cover h-[300px]"
                    // src={publicFolder + item.photo}
                    src=""
                    alt=""
                  />
                )}
                {/* card desc */}
                <div className="flex justify-between w-full p-2">
                  <span className="text-orange-600 font-semibold text-sm">
                    {item?.categories}
                  </span>
                  <span className="text-sm">{item.date}</span>
                </div>
                <Link to={`/post/${item?._id}`}>
                  <h1 className="text-xl font-extrabold p-2">{item.title}</h1>
                </Link>
                <p className="px-2">{item.desc.slice(0, 200) + "..."}</p>

                {/* Resim ve yazar adı eklenecek */}
                <div className="flex items-center gap-2 justify-between p-2">
                  <div className="text-gray-400 text-xs">
                    {new Date(item?.createdAt).toDateString()}
                  </div>
                  <div className="flex gap-1">
                    <img
                      className="w-[40px] h-[40px]  rounded-full"
                      src={publicFolder + getUserInfo?.profilePic}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="font-extrabold">{item?.username}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
