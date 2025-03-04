const NavSecondary = () => {
  return (
    <nav
      id="navsecondary"
      className="bg-gray-100 p-4 shadow-md sticky top-0 z-10"
    >
      <div className="widthwrapper expandwrapper cursor-grab">
        <ul className="flex space-x-4">
          <li className="active">
            <a
              className="text-gray-800 hover:text-blue-500 active:bg-blue-100 px-3 py-2 rounded"
              href="/publications/#present"
            >
              <span>Presentations & Posters</span>
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 active:bg-blue-100 px-3 py-2 rounded"
              href="/publications/#pubs"
            >
              <span>Publications & References</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavSecondary;
