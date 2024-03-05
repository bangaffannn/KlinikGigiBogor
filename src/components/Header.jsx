import React, { useState } from "react";
import logo from "../assets/logonew.png";
import { FaInstagram, FaFacebook, FaXing, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-transparent text-black p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-3">
          <img className="w-8 h-auto" src={logo} alt="" />
          <button className="text-xl font-serif hidden md:block">
            drg. Irma Wiyanti
          </button>
        </div>
        <button className="md:hidden z-10" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 text-black hover:text-primary transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-black hover:text-primary transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isMenuOpen
              ? "fixed md:hidden p-8 top-0 left-0 right-0 bg-primary bg-opacity-80 transition-opacity duration-500 ease-in-out"
              : "hidden md:block md:flex md:items-center space-x-4"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-x-6">
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                onClick={handleMenuClick}
                className="font-sans text-md cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
                to="banner"
              >
                Tentang kami
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                onClick={handleMenuClick}
                className="font-sans text-md cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
                to="layanan"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                onClick={handleMenuClick}
                className="font-sans text-md cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
                to="reservasi"
              >
                Reservasi
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                onClick={handleMenuClick}
                className="font-sans text-md cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
                to="testimoni"
              >
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}4
                spy={true}
                onClick={handleMenuClick}
                className="font-sans text-md cursor-pointer hover:text-secondary transition-all duration-300 ease-in-out"
                to="faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* <ul className="flex gap-x-4">
          <li>
            <a
              href="#"
              className="hover:text-secondary transition-all duration-300 ease-in-out"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-secondary transition-all duration-300 ease-in-out"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-secondary transition-all duration-300 ease-in-out"
            >
              <FaXing />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-secondary transition-all duration-300 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
