import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import Button from "../Buttons/Button";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 font-outfit md:h-[70px] transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-80 dark:bg-lightblack-100 shadow-sm"
          : "md:bg-gray-25 bg-gray-30 dark:bg-lightblack-200 md:shadow-none"
      }`}
    >
      <div className="max-w-[1320px] mx-auto md:px-4 px-2 md:py-2 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo/logo.png"
            alt="Logo"
            width={120}
            height={32}
            className="w-auto h-11"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden space-x-4 md:flex">
          {["Home", "About", "Services", "Blog", "Contact Us"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-base font-semibold transition text-gray-710 hover:text-blue-300 dark:text-gray-75 dark:hover:text-blue-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:block">Join Now</Button>
          <button
            onClick={toggleDarkMode}
            className="hidden w-10 h-10 border border-[#5D5FEF] rounded-full md:flex items-center justify-center bg-gray-80 text-gray-700 dark:text-white dark:bg-lightblack-100 dark:border-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 md:hidden dark:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 px-6 shadow-lg md:hidden bg-gray-30 dark:bg-lightblack-300">
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Services", "Blog", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="py-2 text-base font-semibold transition text-gray-710 hover:text-blue-300 dark:text-gray-75 dark:hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <Button>Join Now</Button>
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 border border-[#5D5FEF] rounded-full flex items-center justify-center bg-gray-80 text-gray-700 dark:text-white dark:bg-lightblack-100 dark:border-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
