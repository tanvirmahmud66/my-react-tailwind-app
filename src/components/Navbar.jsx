

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080); // custom breakpoint
  const scrollTimeout = useRef(null);
  const location = useLocation();

  // Handle scroll events to update active link
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (location.pathname.startsWith("/projects")) {
          setActiveLink("projects");
          return;
        }
        const sections = document.querySelectorAll("section[id]");
        let current = "hero";
        sections.forEach((section) => {
          if (window.scrollY >= section.offsetTop - 100) {
            current = section.id;
          }
        });
        setActiveLink(current);
      }, 100);
    };

    if (!location.pathname.startsWith("/projects")) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname]);

  // Handle window resize for custom mobile breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1080);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScroll = (id) => {
    if (id === "projects" && location.pathname.startsWith("/projects")) {
      window.location.href = "/#projects";
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveLink(id);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
  ];

  const isDark = theme === "dark";

  return (
    <nav className={`shadow-lg sticky top-0 z-50 border-b transition-colors duration-300 ${
      isDark ? "bg-[#0B192C] border-[#1E3E62]" : "bg-white border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Brand */}
          <div className="flex items-center">
            <Link
              to={"/"}
              className={`ml-2 text-xl font-bold transition-colors duration-300 ${
                isDark ? "text-[#FFA550] hover:text-white" : "text-[#FF6500] hover:text-gray-800"
              }`}
            >
              Tanvir Mahmud
            </Link>
          </div>

          {/* Desktop menu */}
          {!isMobile && (
            <div className="flex items-center">
              <div className="ml-10 flex items-center space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => smoothScroll(link.to)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeLink === link.to ||
                      (link.to === "projects" && location.pathname.startsWith("/projects"))
                        ? "bg-[#FF6500] text-white transform scale-105"
                        : isDark
                          ? "text-gray-300 hover:text-white hover:bg-[#1E3E62]"
                          : "text-gray-800 hover:text-white hover:bg-[#FF6500]"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Right side buttons */}
              <div className="ml-4 flex items-center space-x-4">
                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    isDark ? "text-gray-300 hover:bg-[#1E3E62]" : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71-.71M21 12h1M2 12H1m16.95 7.95l-.71-.71M4.05 4.05l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.75 15.5a9 9 0 01-11.25-11 9 9 0 1011.25 11z" />
                    </svg>
                  )}
                </button>

                {/* GitHub */}
                <a
                  href="https://github.com/tanvirmahmud66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6500] hover:bg-[#E55C00] transition-colors duration-300 transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          )}

          {/* Mobile menu toggle */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isDark ? "text-gray-300 hover:bg-[#1E3E62]" : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71-.71M21 12h1M2 12H1m16.95 7.95l-.71-.71M4.05 4.05l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.75 15.5a9 9 0 01-11.25-11 9 9 0 1011.25 11z" />
                  </svg>
                )}
              </button>

              {/* Hamburger */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-300 hover:text-white hover:bg-[#FF6500] dark:hover:bg-[#1E3E62] focus:outline-none transition-all duration-300"
                aria-expanded={isMenuOpen}
              >
                <svg className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu items */}
      {isMobile && isMenuOpen && (
        <div className={`border-t transition-colors duration-300 ${isDark ? "bg-[#0B192C] border-[#1E3E62]" : "bg-white border-gray-200"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => {
                  smoothScroll(link.to);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeLink === link.to ||
                  (link.to === "projects" && location.pathname.startsWith("/projects"))
                    ? "bg-[#FF6500] text-white"
                    : isDark
                      ? "text-gray-300 hover:text-white hover:bg-[#1E3E62]"
                      : "text-gray-800 hover:text-white hover:bg-[#FF6500]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
