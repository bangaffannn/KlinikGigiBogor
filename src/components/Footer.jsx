// Footer.js

import React from "react";
import { FaInstagram, FaFacebook, FaXing, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p>Best Dental Treatment With Best Service, Only For You!</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe Us</h3>
            <ul className="flex space-x-4">
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
