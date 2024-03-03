// Footer.js

import React from "react";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaFacebook,
  FaXing,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              About Us
            </h3>
            <p className="text-green-800">
              Best dental treatment with best service, only for you!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Contact Us
            </h3>
            <p className="text-green-800">Email: contoh@contoh.com</p>
            <p className="text-green-800">Phone: +62 819 5895 4949</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">Links</h3>
            <ul>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="banner">Home</Link>
              </li>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="banner">About</Link>
              </li>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="layanan">Services</Link>
              </li>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="reservasi">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Subscribe Us
            </h3>
            <ul className="flex space-x-4 text-green-800">
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
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-all duration-300 ease-in-out"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
