const Dropdown = () => {
  const dropItems = [
    { text: "My Blogs", href: "/" },
    { text: "Settings", href: "/" },
    { text: "Log out", href: "/" },
  ];

  return (
    <>
      <div
        className="absolute top-10 right-0 bg-[#ff8a4ff4] text-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
        id="dropdown"
      >
        <div className="px-4 py-3 w-44">
          <span className="block text-sm">Mert Öztat</span>
          <span className="block text-sm font-medium text-white truncate">
            mert@test.com
          </span>
        </div>
        <ul aria-labelledby="dropdown">
          {dropItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-sm hover:bg-gray-700 text-white block px-4 py-2"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
