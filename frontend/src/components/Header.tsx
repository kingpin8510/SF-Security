import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="" className="text-2xl font-bold text-blue-600">
            SafeMax Security
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
            <NavLink onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</NavLink>
            <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </nav>
          <button
            className="md:hidden text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >

          <nav className="flex flex-col items-center py-4">
            <MobileNavLink onClick={() => scrollToSection('about')}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('services')}>
              Services
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('why-choose-us')}>
              Why Choose Us
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection('contact')}>
              Contact
            </MobileNavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

// Update NavLink component to accept onClick
const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-600 hover:text-blue-600 transition duration-300"
  >
    {children}
  </button>
);

// Update MobileNavLink component
const MobileNavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <button
    className="text-gray-600 hover:text-blue-600 transition duration-300 py-2"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Header;