// src/components/Footer.jsx
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <img src={logo} alt="Company Logo" className="h-44 mb-4" />
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold font-poppins mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-inter">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}     
        <div>
          <h3 className="text-white text-lg font-semibold font-poppins mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm font-inter">
            <li><span className="hover:text-white transition cursor-default">Residential Construction</span></li>
            <li><span className="hover:text-white transition cursor-default">Commercial Buildings</span></li>
            <li><span className="hover:text-white transition cursor-default">Renovations</span></li>
            <li><span className="hover:text-white transition cursor-default">Project Management</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold font-poppins mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm font-inter">
            <li>
              Office Address : Beside domino's pizza,
              ParvathiNagar Main Rd,Ballari, Karnataka 583103
            </li>
            <li>Contact info: 91+ 6361253544 / 7411089029</li>
            <li>prasiddhiconstructions@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">

            {/* WhatsApp */}
            <a
              className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
              href="https://wa.me/916361253544"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a
              className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
              href="https://www.instagram.com/prasiddhiconstructions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm font-inter text-gray-500">
        © {new Date().getFullYear()} Prasiddhi Construction Company. All rights reserved.
      </div>
    </footer>
  );
}
