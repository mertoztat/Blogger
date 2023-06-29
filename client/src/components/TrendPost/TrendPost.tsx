import sample from "assets/example.jpg";
import profile from "assets/profile.jpg";

const TrendPost = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-4 mb-10">Trending</h2>
      <div className="flex  justify-center w-full   ">
        <div className="flex justify-center">
          <img className="w-full md:w-[420px] h-[500px] " src={sample} alt="" />
        </div>

        <div className="md:w-1/3 p-10">
          <span className="text-orange-600 font-semibold text-m">
            Natural, Travel
          </span>{" "}
          - <span className="text-sm">June 29, 2023</span>
          <h1 className="text-3xl font-extrabold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            modi!
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ducimus assumenda explicabo atque, temporibus asperiores, libero a
            voluptate blanditiis obcaecati delectus autem voluptatum dolorum
            eaque cupiditate vitae...
          </p>
          <div className="flex items-center gap-2 justify-end">
            <img
              className="w-[50px] h-[50px]  rounded-full"
              src={profile}
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-extrabold">Mars</span>
              <span>Dog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendPost;
