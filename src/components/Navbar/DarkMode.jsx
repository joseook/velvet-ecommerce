import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DarkMode = () => {
  // Check for user's preferred color scheme as default
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
  
  const [theme, setTheme] = useState(defaultTheme);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    // No animation on initial render
    if (isInitialRender) {
      setIsInitialRender(false);
    }
  }, [theme, element, isInitialRender]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === "dark"}
    >
      <span className="sr-only">Toggle dark mode</span>
      
      {/* Sun Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute w-5 h-5 ${theme === "dark" ? "stroke-primary" : "stroke-accent"}`}
        animate={{
          rotate: !isInitialRender ? [0, 90] : 0,
          opacity: theme === "light" ? 1 : 0,
          scale: theme === "light" ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </motion.svg>
      
      {/* Moon Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute w-5 h-5 ${theme === "dark" ? "stroke-accent" : "stroke-primary"}`}
        animate={{
          rotate: !isInitialRender ? [0, -90] : 0,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </motion.svg>
      
      {/* Background circle effect */}
      <span 
        className={`absolute w-full h-full rounded-full bg-primary/10 dark:bg-accent/10 transform transition-transform duration-700 ${
          theme === "dark" ? "scale-100" : "scale-0"
        }`}
      ></span>
    </button>
  );
};

export default DarkMode;
