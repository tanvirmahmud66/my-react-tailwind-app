import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('hero');
    const scrollTimeout = useRef(null);
    const location = useLocation();

    // Handle scroll events to update active link and check route
    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                // If we're on the project details page, keep projects active
                if (location.pathname.startsWith('/projects')) {
                    setActiveLink('projects');
                    return;
                }

                const sections = document.querySelectorAll('section[id]');
                let current = 'hero';

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        current = section.id;
                    }
                });

                setActiveLink(current);
            }, 100);
        };

        // Check route on initial load
        if (location.pathname.startsWith('/projects')) {
            setActiveLink('projects');
        } else {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [location.pathname]);

    // Smooth scroll function
    const smoothScroll = (id) => {
        // If clicking projects link while on details page, go home first
        if (id === 'projects' && location.pathname.startsWith('/projects')) {
            window.location.href = '/#projects';
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveLink(id);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
        { name: 'Products', to: 'products' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="bg-[#0B192C] shadow-lg sticky top-0 z-50 border-b border-[#1E3E62]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Brand logo with text */}
                    <div className="flex items-center">
                        <Link
                            to={'/'}
                            className="ml-2 text-xl font-bold text-[#FF6500] transition-colors duration-300 hover:text-white"
                        >
                            Tanvir Mahmud
                        </Link>
                    </div>

                    {/* Desktop menu - middle */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.to}
                                    onClick={() => smoothScroll(link.to)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeLink === link.to ||
                                            (link.to === 'projects' && location.pathname.startsWith('/projects'))
                                            ? 'text-white bg-[#FF6500] transform scale-105'
                                            : 'text-gray-300 hover:text-white hover:bg-[#1E3E62]'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right side buttons - desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/tanvirmahmud66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6500] hover:bg-[#E55C00] transition-colors duration-300 transform hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            GitHub
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1E3E62] focus:outline-none transition-all duration-300"
                            aria-expanded={isMenuOpen}
                        >
                            <svg
                                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <button
                            key={link.to}
                            onClick={() => {
                                smoothScroll(link.to);
                                setIsMenuOpen(false);
                            }}
                            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${activeLink === link.to ||
                                    (link.to === 'projects' && location.pathname.startsWith('/projects'))
                                    ? 'text-white bg-[#FF6500] transform scale-105'
                                    : 'text-gray-300 hover:text-white hover:bg-[#1E3E62]'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
                <div className="pt-4 pb-3 border-t border-[#1E3E62]">
                    <div className="flex items-center justify-center px-5">
                        <a
                            href="https://github.com/tanvirmahmud66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6500] hover:bg-[#E55C00] transition-colors duration-300 transform hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;