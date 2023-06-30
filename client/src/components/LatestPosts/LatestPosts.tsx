import { mockBlogs } from "components/LatestPosts/mockdata";

interface IMockDatas {
  id?: number;
  title?: string;
  desc?: string;
  date?: string;
  categories?: string[];
  author?: string;
  author_img?: string;
  image?: string;
}

const LatestPosts: React.FC<IMockDatas> = () => {
  return (
    <>
      <div className="text-center mt-3 ">
        <span className="inline-block text-center text-4xl font-bold mt-4 mb-10 first-letter:text-orange-600 pr-1 ">
          Latest
        </span>
        <span className="inline-block text-center text-4xl font-bold mt-4 mb-10 first-letter:text-orange-600 ">
          Posts
        </span>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-4  ">
          {mockBlogs?.map((item) => (
            <>
              <div className="flex flex-col justify-center w-[390px] bg-white">
                <img className="w-[390px] h-[300px] " src={item.image} alt="" />
                {/* card desc */}
                <div className="flex justify-between w-full p-2">
                  <span className="text-orange-600 font-semibold text-sm">
                    {item?.categories}
                  </span>
                  <span className="text-sm">{item.date}</span>
                </div>
                <h1 className="text-xl font-extrabold p-2">{item.title}</h1>
                <p className="px-2">{item.desc}</p>
                <div className="flex items-center gap-2 justify-end p-2">
                  <img
                    className="w-[40px] h-[40px]  rounded-full"
                    src={item.author_img}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="font-extrabold">{item.author}</span>
                    <span>Dog</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
