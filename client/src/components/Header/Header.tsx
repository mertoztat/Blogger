import logo from "assets/blogger2.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-4 w-full">
      <div>
        <img className="w-32" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer text-lg ">Home</li>
          <li className="cursor-pointer text-lg ">About</li>
          <li className="cursor-pointer text-lg ">Post</li>
          <li className="cursor-pointer text-lg ">Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer text-lg ">Login</li>
          <li className="cursor-pointer text-lg ">Register</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
