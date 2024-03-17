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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Tentang Kami
            </h3>
            <p className="text-green-800">
              Perawatan gigi terbaik dengan pelayanan terbaik hanya untuk kamu!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Hubungi Kami
            </h3>
            <p className="text-green-800">Kontak: +62 819 5895 4949</p>
            <p className="text-green-800 text-justify">
              Alamat: Jl. Raya Semplak No.220, RT.02/RW.10, Semplak, Kec. Bogor
              Barat, Kota Bogor, Jawa Barat 16114
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Tautan
            </h3>
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
                <Link to="banner">Tentang kami</Link>
              </li>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="layanan">Layanan</Link>
              </li>
              <li
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-green-800 cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
              >
                <Link to="faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-green-900">
              Media Sosial
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
                  href="https://wa.me/6281958954949"
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
