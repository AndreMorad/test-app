import { useState, useEffect } from "react";
import logo from "../assets/kevinRushLogo.png";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaSquareXTwitter,
//   FaInstagram,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
import { LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex items-center flex-shrink-0">
          <img className="w-10 mx-2" src={logo} alt="logo" />
        </div>
        <div className="fixed top-0 right-0 z-30 p-4">
          <button onClick={toggleMenu} className="p-2 rounded-md">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center text-white bg-black">
          <ul className="space-y-6 text-3xl">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={toggleMenu}
                  className="text-2xl font-semibold tracking-wide uppercase hover:text-lime-300 lg:text-4xl"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    // <nav className="flex items-center justify-between py-6 mb-20">
    //     <div className="flex items-center flex-shrink-0">
    //         <img className="w-10 mx-2" src={logo} alt="logo" />
    //     </div>
    //     <div className="flex items-center justify-center gap-4 m-8 text-2xl">
    //         <FaLinkedin />
    //         <FaGithub />
    //         <FaSquareXTwitter />
    //         <FaInstagram />
    //     </div>
    // </nav>
  );
};

export default Navbar;
