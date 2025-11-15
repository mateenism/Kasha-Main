import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES_DATA } from '../constants';
import { MenuIcon, XIcon, SunIcon, MoonIcon, ChevronDownIcon } from './Icons';

interface HeaderProps {
    toggleTheme: () => void;
    theme: string;
}

const NavDropdown: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    let timeoutId: number;

    const handleEnter = () => {
        clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const handleLeave = () => {
        timeoutId = window.setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    return (
        <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button className="text-gray-500 dark:text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center focus:outline-none">
                {title}
                <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-brand-gray ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#D4AF37',
    textShadow: '0 0 5px #D4AF37',
  };

  const navLinkClass = "text-gray-500 dark:text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const dropdownItemClass = "block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-dark hover:text-brand-gold";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-brand-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-heading font-bold text-brand-dark dark:text-white tracking-widest">
              Ka<span className="text-brand-gold">Sha</span>
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center">
              <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={navLinkClass}>About Us</NavLink>
              
              <NavDropdown title="Services">
                  <Link to="/services" className={dropdownItemClass}>All Services</Link>
                  <div className="border-t border-gray-200 dark:border-gray-700 mx-2 my-1"></div>
                  {SERVICES_DATA.map(service => (
                      <Link key={service.id} to={`/services/${service.slug}`} className={dropdownItemClass}>
                          {service.title}
                      </Link>
                  ))}
              </NavDropdown>

              <NavLink to="/portfolio" style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={navLinkClass}>Portfolio</NavLink>

              <NavLink to="/image-generator" style={({ isActive }) => (isActive ? activeLinkStyle : {})} className={navLinkClass}>Vision Engine</NavLink>

              <NavDropdown title="Explore">
                  <Link to="/team" className={dropdownItemClass}>Our Team</Link>
                  <Link to="/blog" className={dropdownItemClass}>Blog</Link>
                  <Link to="/careers" className={dropdownItemClass}>Careers</Link>
                  <Link to="/contact" className={dropdownItemClass}>Contact</Link>
              </NavDropdown>

          </nav>
          <div className="flex items-center">
             <NavLink
                to="/cost-calculator"
                className="hidden md:block bg-transparent border-2 border-brand-gold text-brand-gold font-semibold py-2 px-4 rounded-sm hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 text-sm"
             >
                Cost Calculator
             </NavLink>
             <button
                onClick={toggleTheme}
                type="button"
                className="p-2 ml-4 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
             >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
             </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <MenuIcon /> : <XIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-light-gray dark:bg-brand-gray">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-gold hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;