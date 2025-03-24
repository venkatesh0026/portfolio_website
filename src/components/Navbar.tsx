
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth 
      ${isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'}
      `}
    >
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-medium text-lg tracking-tight">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden absolute top-full left-0 right-0 glass shadow-sm overflow-hidden transition-all duration-300 ease-smooth
          ${mobileMenuOpen ? 'max-h-80' : 'max-h-0'}
        `}
      >
        <div className="px-4 py-2">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="block py-3 text-foreground/90 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
