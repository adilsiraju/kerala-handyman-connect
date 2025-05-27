
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname.startsWith(path) && path !== '/';
  };
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <Link to="/" className="flex items-center hover-glow">
              <div className="relative">
                <img 
                  src="/lovable-uploads/746691ab-aeae-40dc-b1fd-3ff89bfc273b.png" 
                  alt="HandyKerala Logo" 
                  className="h-12 w-12 mr-3 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-kerala-yellow rounded-full animate-ping opacity-75"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-kerala-green font-poppins tracking-tight">HandyKerala</h1>
                <div className="flex items-center text-xs text-kerala-charcoal opacity-70">
                  <Shield className="w-3 h-3 mr-1" />
                  <span>Verified • Thalassery</span>
                </div>
              </div>
            </Link>
          </div>          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-all duration-300 relative py-2 px-1 ${
                isActive('/') 
                  ? 'text-kerala-green font-medium' 
                  : 'text-kerala-charcoal hover:text-kerala-green'
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-kerala-green before:transition-all before:duration-300 hover:before:w-full ${
                isActive('/') ? 'before:w-full' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-all duration-300 relative py-2 px-1 ${
                isActive('/services') 
                  ? 'text-kerala-green font-medium' 
                  : 'text-kerala-charcoal hover:text-kerala-green'
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-kerala-green before:transition-all before:duration-300 hover:before:w-full ${
                isActive('/services') ? 'before:w-full' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-300 relative py-2 px-1 ${
                isActive('/about') 
                  ? 'text-kerala-green font-medium' 
                  : 'text-kerala-charcoal hover:text-kerala-green'
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-kerala-green before:transition-all before:duration-300 hover:before:w-full ${
                isActive('/about') ? 'before:w-full' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-300 relative py-2 px-1 ${
                isActive('/contact') 
                  ? 'text-kerala-green font-medium' 
                  : 'text-kerala-charcoal hover:text-kerala-green'
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-kerala-green before:transition-all before:duration-300 hover:before:w-full ${
                isActive('/contact') ? 'before:w-full' : ''
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/partner" 
              className={`transition-all duration-300 relative py-2 px-1 ${
                isActive('/partner') 
                  ? 'text-kerala-green font-medium' 
                  : 'text-kerala-charcoal hover:text-kerala-green'
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-kerala-green before:transition-all before:duration-300 hover:before:w-full ${
                isActive('/partner') ? 'before:w-full' : ''
              }`}
            >
              <span className="flex items-center">
                Join as Partner
                <Star className="w-3 h-3 ml-1 text-kerala-yellow" />
              </span>
            </Link>
          </div>          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('tel:+918113936995')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              className="bg-gradient-to-r from-kerala-yellow to-kerala-orange hover:from-kerala-orange hover:to-kerala-yellow text-kerala-charcoal font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              onClick={() => window.open('https://wa.me/918113936995?text=Hi! I need a handyman service in Thalassery')}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
            </Button>
          </div>          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-kerala-charcoal hover:text-kerala-green transition-all duration-300 p-2 rounded-lg hover:bg-kerala-green/10"
            >
              {isOpen ? (
                <X className="h-6 w-6 animate-rotate-in" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg animate-slideDown">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-all duration-300 py-2 px-4 rounded-lg ${
                  isActive('/') 
                    ? 'text-kerala-green font-medium bg-kerala-green/10' 
                    : 'text-kerala-charcoal hover:text-kerala-green hover:bg-kerala-green/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-all duration-300 py-2 px-4 rounded-lg ${
                  isActive('/services') 
                    ? 'text-kerala-green font-medium bg-kerala-green/10' 
                    : 'text-kerala-charcoal hover:text-kerala-green hover:bg-kerala-green/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-all duration-300 py-2 px-4 rounded-lg ${
                  isActive('/about') 
                    ? 'text-kerala-green font-medium bg-kerala-green/10' 
                    : 'text-kerala-charcoal hover:text-kerala-green hover:bg-kerala-green/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-all duration-300 py-2 px-4 rounded-lg ${
                  isActive('/contact') 
                    ? 'text-kerala-green font-medium bg-kerala-green/10' 
                    : 'text-kerala-charcoal hover:text-kerala-green hover:bg-kerala-green/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/partner" 
                className={`transition-all duration-300 py-2 px-4 rounded-lg flex items-center ${
                  isActive('/partner') 
                    ? 'text-kerala-green font-medium bg-kerala-green/10' 
                    : 'text-kerala-charcoal hover:text-kerala-green hover:bg-kerala-green/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Join as Partner
                <Star className="w-3 h-3 ml-1 text-kerala-yellow" />
              </Link>
              <div className="flex space-x-3 pt-4 px-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white transition-all duration-300 flex-1"
                  onClick={() => {
                    window.open('tel:+918113936995');
                    setIsOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button 
                  className="bg-gradient-to-r from-kerala-yellow to-kerala-orange text-kerala-charcoal font-medium transition-all duration-300 flex-1"
                  onClick={() => {
                    window.open('https://wa.me/918113936995?text=Hi! I need a handyman service in Thalassery');
                    setIsOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
