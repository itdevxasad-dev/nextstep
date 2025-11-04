import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/nextstep.jpg";

const Header = () => {
  const location = useLocation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    if (isLangOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangOpen]);

  if (location.pathname !== "/") return null;

  return (
    <nav
      className={`mx-auto my-4 px-6 py-4 fixed top-4 left-0 right-0 z-50 transition-all duration-300 rounded-[30px] max-w-[1200px] ${isScrolled
          ? "backdrop-blur-md bg-[#1c3449]/80 shadow-md" 
          : "bg-black/100" 
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            width={40}
            src={Logo}
            alt="Logo"
            className={`transition-transform duration-300 ${isScrolled ? "scale-90" : "scale-100"
              }`}
          />
          <h1
            className={`text-white text-2xl font-bold ml-2 transition-opacity duration-300 ${isScrolled ? "opacity-90" : "opacity-100"
              }`}
          >
            NextStep
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {["/", "/about", "/projects", "/blog", "/faq"].map((path, idx) => {
            const name = ["Home", "About us", "Projects", "Blog", "FAQ"][idx];
            return (
              <NavLink
                key={idx}
                to={path}
                className={({ isActive }) =>
                  `text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200 pb-1 ${isActive
                    ? "border-b-2 border-white"
                    : "border-b-2 border-transparent"
                  }`
                }
              >
                {name}
              </NavLink>
            );
          })}
        </div>

        {/* Language & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <Globe className="w-5 h-5" />
              <span className="text-base font-normal">English</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#2c4a5c] rounded-lg shadow-xl py-2 z-50 border border-gray-600">
                {["English", "Русский", "O'zbekcha"].map((lang, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#3d5a6c] transition-colors duration-200"
                    onClick={() => setIsLangOpen(false)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-full w-80 bg-[#1a2930] z-50 shadow-2xl lg:hidden transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <div className="flex items-center space-x-2">
                <X className="w-5 h-5 text-white" />
                <span className="text-white text-lg font-medium">XCDM</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 space-y-6">
              {["Home", "About us", "Projects", "Blog", "FAQ"].map((name, idx) => {
                const path = ["/", "/about", "/projects", "/blog", "/faq"][idx];
                return (
                  <NavLink
                    key={idx}
                    to={path}
                    className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
