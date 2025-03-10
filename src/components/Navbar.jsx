import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Menu Data (Array of Objects)
const menuItems = [
  {
    title: "About",
    link: "/about"
    /*submenu: [
      { title: "Leadership", link: "/about#leadership" },
      { title: "Board of Directors", link: "/about#board-of-directors" },
      { title: "Vision & Mission", link: "/about#vision" }
    ]*/
  },
  { title: "Technology", link: "/technology" },
  { title: "Pipeline", link: "/pipeline" },
  {
    title: "Publications",
    link: "/publications"
    /*submenu: [
      { title: "Presentations & Posters", link: "/publications#present" },
      { title: "Publications & References", link: "/publications#pubs" }
    ]*/
  },
  { title: "Careers", link: "/careers" },
  { title: "Contact", link: "/contact-us" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle dropdowns
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          JayCell
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `hover:text-gray-300 ${
                    isActive ? "border-b-2 border-white pb-1" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>

              {/* Dropdown (if submenu exists) */}
              {/*item.submenu && (
                <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg hidden group-hover:block w-48">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.link}
                        className={({ isActive }) =>
                          `block px-4 py-2 hover:bg-gray-200 ${
                            isActive ? "bg-gray-300 font-semibold" : ""
                          }`
                        }
                      >
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )*/}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-between w-full text-left"
                    >
                      {item.title} {dropdownOpen === index ? "▲" : "▼"}
                    </button>
                    {dropdownOpen === index && (
                      <ul className="pl-4 mt-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subItem.link}
                              className={({ isActive }) =>
                                `block py-1 ${
                                  isActive ? "text-yellow-300 font-bold" : ""
                                }`
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `block py-1 ${
                        isActive ? "text-yellow-300 font-bold" : ""
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
