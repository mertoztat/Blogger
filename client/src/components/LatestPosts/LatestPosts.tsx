import { Link } from "react-router-dom";

const LatestPosts = ({ posts }: any) => {
  const publicFolder = "http://localhost:4000/images/";
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
          {posts?.map((item: any, index: number) => (
            <div key={index}>
              <div className="w-full  flex flex-col justify-center md:max-w-[390px] sm:bg-white">
                {item.photo && (
                  <img
                    className="w-full md:w-[400px] md:object-cover h-[300px]"
                    src={publicFolder + item.photo}
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
                <p className="px-2">{item.desc}</p>

                {/* Resim ve yazar adı eklenecek */}
                <div className="flex items-center gap-2 justify-between p-2">
                  <div className="text-gray-400 text-xs">
                    {new Date(item?.createdAt).toDateString()}
                  </div>
                  <div className="flex gap-1">
                    <img
                      className="w-[40px] h-[40px]  rounded-full"
                      src={
                        item.author_img ||
                        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80"
                      }
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
