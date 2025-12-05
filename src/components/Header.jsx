import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const navigation = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function Header({ setContactOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll function
  const handleNavigation = (id) => {
    if (id === "contact") {
      setContactOpen(true);
      setMobileMenuOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a onClick={() => handleNavigation("home")} className="cursor-pointer">
            <span className="sr-only">Company Logo</span>
            <img
              src={logo}
              alt="Company Logo"
              className={`drop-shadow-lg transition-all duration-300 ${
                scrolled ? "h-20" : "h-65"
              }`}
              loading="lazy"
            />
          </a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex lg:gap-x-8 text-lg font-medium text-white drop-shadow-md">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.id)}
              className="relative px-3 py-1 rounded group cursor-pointer"
            >
              <span className="absolute inset-0 bg-white/20 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/20 transition"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6 drop-shadow-md" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />

        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-black/70 px-6 py-6 sm:max-w-md backdrop-blur-md">
          
          {/* Top Section */}
          <div className="flex items-center justify-between mb-6">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 w-auto drop-shadow-lg"
              loading="lazy"
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:bg-blue-600/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 drop-shadow-md" />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left relative px-3 py-2 rounded group text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-white/20 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

        </div>
      </Dialog>
    </header>
  );
}
