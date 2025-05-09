
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold text-white">
          The Lord of the <span className="text-club-gold">Drinks</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white hover:text-club-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white py-2 hover:text-club-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Reserve Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
