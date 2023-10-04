import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import icon from "../../assets/icon.png";

const PostDetail = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="">
        <img
          className="w-full h-96 rounded-t-lg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

        {/* eidit */}
        <div className="flex justify-between items-center w-full p-6">
          <div className="flex items-center gap-2 ">
            <img src={icon} alt="photos" className="h-12 w-12" />
            <p className="flex flex-col text-gray-500 text-sm">
              by Mert Öztat
              <p className="text-xs text-gray-500">04.10.2023</p>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span>
              <FaEdit />
            </span>
            <span>
              <FaTrash />
            </span>
          </div>
        </div>

        <h1 className="font-bold text-2xl text-center text-black my-2">
          Lorem ipsum dolor
        </h1>
        <div className="w-full  flex justify-center">
          <p className="w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
