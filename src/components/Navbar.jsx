import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/resume1.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className="z-50 fixed w-full  flex justify-between items-center px-4 py-2 bg-[#111] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <code className="block py-4">WebDeveloper</code>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li
          id="has-work-link"
          className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent"
        >
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>

        <li className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 hover:border-b-2 hover:border-orange-600 border-b-2 border-transparent">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2651a4]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href='https://www.linkedin.com/in/zohaibwebdev/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href='https://github.com/zohaibwebdev'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ed143d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${`zohaibfas@gmail.com`}`}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
