import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-[#2c4a5c] px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img width={40} src={Logo} alt="No Logo?" />
          <h1 className="text-white text-2xl font-bold ml-2">NextStep</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <NavLink
            to="/"
            className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200 border-b-2 border-white pb-1"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
          >
            About us
          </NavLink>
          <NavLink
            to="/projects"
            className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
          >
            FAQ
          </NavLink>
        </div>

        {/* Desktop Language Selector & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <Globe className="w-5 h-5" />
              <span className="text-base font-normal">English</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
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
              <div className="absolute right-0 mt-2 w-40 bg-[#2c4a5c] rounded-lg shadow-xl py-2 z-10 border border-gray-600">
                <button className="w-full text-left px-4 py-2 text-white hover:bg-[#3d5a6c] transition-colors duration-200">
                  English
                </button>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-[#3d5a6c] transition-colors duration-200">
                  Русский
                </button>
                <button className="w-full text-left px-4 py-2 text-white hover:bg-[#3d5a6c] transition-colors duration-200">
                  O'zbekcha
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-[#1a2930] z-50 shadow-2xl lg:hidden transform transition-transform duration-300">
            {/* Sidebar Header */}
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

            {/* Sidebar Navigation */}
            <div className="flex flex-col p-6 space-y-6">
              <NavLink
                to="/"
                className="text-[#00b4d8] text-lg font-normal hover:text-white transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About us
              </NavLink>
              <NavLink
                to="/projects"
                className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/blog"
                className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/faq"
                className="text-white text-lg font-normal hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </NavLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
