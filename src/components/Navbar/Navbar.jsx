import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Collections",
    link: "/#collections",
  },
  {
    id: 3,
    name: "New Arrivals",
    link: "/#new",
  },
  {
    id: 4,
    name: "Essentials",
    link: "/#essentials",
  },
  {
    id: 5,
    name: "Sale",
    link: "/#sale",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Now",
    link: "/#trending",
  },
  {
    id: 2,
    name: "Best Sellers",
    link: "/#bestsellers",
  },
  {
    id: 3,
    name: "New Releases",
    link: "/#newreleases",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to add backdrop blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm" 
        : "bg-white dark:bg-neutral-900"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 font-display font-semibold text-2xl">
              <img src={Logo} alt="Velvet Logo" className="w-8 h-8" />
              <span className="bg-gradient-to-r from-primary to-neutral-700 dark:to-neutral-300 bg-clip-text text-transparent">
                Velvet
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.link} 
                    className="text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-accent py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {/* Collections Dropdown */}
              <li className="group relative">
                <button className="flex items-center gap-1 text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-accent py-2 text-sm font-medium transition-colors duration-200">
                  Collections
                  <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2 px-3">
                    {DropdownLinks.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        className="block px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-accent/40 dark:hover:bg-primary/10 rounded-md transition-colors duration-150"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdSearch className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-40 lg:w-60 focus:w-72 bg-neutral-100 dark:bg-neutral-800 border-0 rounded-full py-2 pl-10 pr-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>

            {/* Cart button */}
            <button
              onClick={() => handleOrderPopup()}
              className="relative bg-primary text-white p-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="Cart"
            >
              <FaCartShopping className="text-lg" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium bg-accent text-primary rounded-full">3</span>
            </button>

            {/* Dark mode toggle */}
            <div className="flex items-center">
              <DarkMode />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:text-primary hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden"
            >
              {mobileMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenuAlt3 className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white dark:bg-neutral-900 shadow-lg">
          {/* Mobile search */}
          <div className="relative mt-3 mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoMdSearch className="text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-neutral-100 dark:bg-neutral-800 border-0 rounded-full py-2 pl-10 pr-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          {/* Mobile menu items */}
          <div className="space-y-1">
            {Menu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-accent/40 dark:hover:bg-primary/10 rounded-md"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile dropdown */}
            <div className="relative">
              <button className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-accent/40 dark:hover:bg-primary/10 rounded-md">
                Collections
                <FaCaretDown />
              </button>
              <div className="mt-1 ml-4 pl-2 border-l-2 border-neutral-200 dark:border-neutral-700">
                {DropdownLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
