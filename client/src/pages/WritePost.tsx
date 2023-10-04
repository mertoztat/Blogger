import { BsCardImage } from "react-icons/bs";
const WritePost = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="w-full h-96 rounded-lg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="">
        <div className=" flex flex-col items-center py-2 px-2 gap-4  ">
          <label htmlFor="fileInput">
            <BsCardImage size={30} color="gray" />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="w-full sm:w-[70%]  bg-gray-100 p-2 rounded-md outline-none"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <div className="flex items-center justify-center">
            <textarea
              className="w-full sm:w-[70%]   border p-1 bg-gray-100 resize-none min-h-[150px] rounded-md outline-none"
              placeholder="Write your blog post..."
              autoFocus={true}
              rows={4}
              cols={150}
            />
          </div>

          <button
            className="p-3 bg-amber-500 text-white rounded-md"
            type="submit"
          >
            Send Your Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePost;
