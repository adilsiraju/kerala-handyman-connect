
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-kerala-beige to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-4 animate-fade-in">
                <span className="text-kerala-green">Malayalikalude</span><br />
                <span className="text-kerala-yellow">Nammalude</span><br />
                Handyman App
              </h1>
              
              <p className="text-xl lg:text-2xl text-kerala-charcoal mb-2 flex items-center justify-center lg:justify-start">
                <MapPin className="w-5 h-5 mr-2 text-kerala-green" />
                Now serving homes in Thalassery 🛠️
              </p>
              
              <p className="text-lg text-kerala-charcoal opacity-80 mb-8 max-w-2xl">
                Professional home services at your fingertips. From plumbing to electrical work, 
                we connect you with trusted local experts in Thalassery, Kerala.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg"
                  className="bg-kerala-green hover:bg-kerala-blue text-white font-medium px-8 py-4 rounded-xl"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Service
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white font-medium px-8 py-4 rounded-xl"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
                
                <Button 
                  size="lg"
                  className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium px-8 py-4 rounded-xl"
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need a handyman service in Thalassery')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-kerala-charcoal opacity-70">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-kerala-green rounded-full mr-2"></div>
                  Verified Professionals
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-kerala-yellow rounded-full mr-2"></div>
                  Same Day Service
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-kerala-orange rounded-full mr-2"></div>
                  Local to Thalassery
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-br from-kerala-green to-kerala-blue rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-kerala-beige rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">🔧</div>
                      <p className="text-sm font-medium text-kerala-charcoal">Plumbing</p>
                    </div>
                    <div className="bg-kerala-beige rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <p className="text-sm font-medium text-kerala-charcoal">Electrical</p>
                    </div>
                    <div className="bg-kerala-beige rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">🧹</div>
                      <p className="text-sm font-medium text-kerala-charcoal">Cleaning</p>
                    </div>
                    <div className="bg-kerala-beige rounded-xl p-4 text-center">
                      <div className="text-2xl mb-2">🔨</div>
                      <p className="text-sm font-medium text-kerala-charcoal">Carpentry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
