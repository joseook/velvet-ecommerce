import React from "react";
import footerLogo from "../../assets/logo.png";
import { 
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPinterest,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

// Navigation Links
const FooterLinks = {
  shop: [
    { title: "New Arrivals", link: "/#new-arrivals" },
    { title: "Bestsellers", link: "/#bestsellers" },
    { title: "Collections", link: "/#collections" },
    { title: "Sale", link: "/#sale" }
  ],
  support: [
    { title: "Help Center", link: "/#help" },
    { title: "Shipping & Returns", link: "/#shipping" },
    { title: "Size Guide", link: "/#size-guide" },
    { title: "Contact Us", link: "/#contact" }
  ],
  company: [
    { title: "About Us", link: "/#about" },
    { title: "Sustainability", link: "/#sustainability" },
    { title: "Careers", link: "/#careers" },
    { title: "Terms & Privacy", link: "/#terms" }
  ]
};

// Social Media Links
const SocialLinks = [
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaFacebook />, link: "#", label: "Facebook" },
  { icon: <FaTwitter />, link: "#", label: "Twitter" },
  { icon: <FaPinterest />, link: "#", label: "Pinterest" },
  { icon: <FaLinkedin />, link: "#", label: "LinkedIn" }
];

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Newsletter Section */}
      <div className="bg-primary/5 dark:bg-primary/10 py-16">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100">
                Join Our Community
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-0 max-w-md">
                Subscribe to receive updates, exclusive offers, and styling inspiration.
              </p>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <form className="flex w-full max-w-md">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-3 px-4 pr-16 rounded-l-md border-0 ring-1 ring-neutral-200 dark:ring-neutral-700 bg-white dark:bg-neutral-800 placeholder-neutral-400 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white py-3 px-6 rounded-r-md transition-colors duration-300 flex items-center"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <FaArrowRight />
                </button>
              </form>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-center gap-2 mb-5">
              <img src={footerLogo} alt="Velvet Logo" className="w-8 h-8" />
              <span className="font-display text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
                Velvet
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-md">
              Velvet offers timeless, sustainable fashion for the modern individual. 
              Our curated collections blend elegance with functionality, designed for 
              those who appreciate quality and mindful consumption.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {SocialLinks.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-primary hover:border-primary hover:text-white dark:hover:text-white transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-display text-base font-semibold mb-5 text-neutral-800 dark:text-neutral-100">
              Shop
            </h4>
            <ul className="space-y-3">
              {FooterLinks.shop.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-display text-base font-semibold mb-5 text-neutral-800 dark:text-neutral-100">
              Support
            </h4>
            <ul className="space-y-3">
              {FooterLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-display text-base font-semibold mb-5 text-neutral-800 dark:text-neutral-100">
              Company
            </h4>
            <ul className="space-y-3">
              {FooterLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors duration-200 inline-block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Information */}
            <div className="mt-8">
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 mb-3">
                <FaLocationArrow className="text-primary dark:text-accent" />
                <p className="text-sm">123 Fashion St, New York, NY</p>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 mb-3">
                <FaMobileAlt className="text-primary dark:text-accent" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <FaEnvelope className="text-primary dark:text-accent" />
                <p className="text-sm">support@velvet.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="container-tight py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Velvet. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
