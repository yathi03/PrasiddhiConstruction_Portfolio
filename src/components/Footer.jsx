// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
            <li><a href="" className="hover:text-white transition">Residential Construction</a></li>
            <li><a href="" className="hover:text-white transition">Commercial Buildings</a></li>
            <li><a href="" className="hover:text-white transition">Renovations</a></li>
            <li><a href="" className="hover:text-white transition">Project Management</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold font-poppins mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm font-inter">
            <li>Ballari</li>
            <li>91+ 6361253544 / 7411089029 </li>
            <li>prasiddhiconstructions@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition" href="#">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition" href="#">
              <FaInstagram />
            </a>
            <a className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition" href="#">
              <FaLinkedinIn />
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
