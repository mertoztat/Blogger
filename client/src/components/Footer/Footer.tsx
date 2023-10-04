import logo from "assets/footer_logo.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 mt-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-16 mr-3" alt="" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  About Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline ">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Company
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
              © {currentYear} <a href="/">Blogger™</a>.{" "}
              <span className="ml-4"> All Rights Reserved.</span>
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://twitter.com/mertoztat"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="http://www.github.com/mertoztat"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mertoztat/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
