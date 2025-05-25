
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/746691ab-aeae-40dc-b1fd-3ff89bfc273b.png" 
                alt="HandyKerala Logo" 
                className="h-10 w-10 mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-kerala-green font-poppins">HandyKerala</h1>
                <p className="text-xs text-kerala-charcoal opacity-70">Thalassery</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
            >
              Contact
            </Link>
            <Link 
              to="/partner" 
              className={`transition-colors ${isActive('/partner') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
            >
              Join as Partner
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white"
              onClick={() => window.open('tel:+919876543210')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button 
              className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need a handyman service in Thalassery')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-kerala-charcoal hover:text-kerala-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${isActive('/services') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/partner" 
                className={`transition-colors ${isActive('/partner') ? 'text-kerala-green font-medium' : 'text-kerala-charcoal hover:text-kerala-green'}`}
                onClick={() => setIsOpen(false)}
              >
                Join as Partner
              </Link>
              <div className="flex space-x-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-kerala-green text-kerala-green"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
                <Button 
                  className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal"
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need a handyman service in Thalassery')}
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
