
import { Facebook, Instagram, Twitter, MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kerala-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/746691ab-aeae-40dc-b1fd-3ff89bfc273b.png" 
                alt="HandyKerala Logo" 
                className="h-8 w-8 mr-3"
              />
              <h3 className="text-xl font-bold font-poppins">HandyKerala</h3>
            </div>
            <p className="text-white/80 mb-4">
              Malayalikalude Nammalude Handyman App. Professional home services 
              delivered by trusted local experts across Thalassery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-kerala-yellow transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-kerala-yellow transition-colors">Our Services</a></li>
              <li><a href="#booking" className="text-white/80 hover:text-kerala-yellow transition-colors">Book Now</a></li>
              <li><a href="#about" className="text-white/80 hover:text-kerala-yellow transition-colors">About Us</a></li>
              <li><a href="#partner" className="text-white/80 hover:text-kerala-yellow transition-colors">Join as Partner</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-kerala-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">🔧 Plumbing Services</span></li>
              <li><span className="text-white/80">⚡ Electrical Work</span></li>
              <li><span className="text-white/80">🧹 Deep Cleaning</span></li>
              <li><span className="text-white/80">🔨 Carpentry</span></li>
              <li><span className="text-white/80">🎨 Painting</span></li>
              <li><span className="text-white/80">❄️ AC Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-kerala-yellow" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-kerala-yellow transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-kerala-yellow" />
                <a 
                  href="https://wa.me/919876543210" 
                  className="text-white/80 hover:text-kerala-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Support
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-kerala-yellow" />
                <a 
                  href="mailto:support@handykerala.com" 
                  className="text-white/80 hover:text-kerala-yellow transition-colors"
                >
                  support@handykerala.com
                </a>
              </div>
              <div className="mt-4">
                <p className="text-white/80 text-sm">
                  📍 Serving Thalassery, Dharmadam, Mahe, and surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold font-poppins mb-4 text-center">Service Areas</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Thalassery', 'Dharmadam', 'Mahe', 'Chokli', 'Kadirur', 'Eranholi', 'Pinarayi'].map((area) => (
              <span 
                key={area} 
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 HandyKerala. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-kerala-yellow transition-colors">Cancellation Policy</a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-kerala-green/20 border border-kerala-green/30 rounded-xl p-4 text-center">
          <p className="text-kerala-yellow font-medium">
            🚨 Emergency Services Available 24/7 - Call +91 98765 43210 or WhatsApp for immediate help
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
