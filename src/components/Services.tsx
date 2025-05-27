
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, ArrowRight, Star, Clock, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const coreServices = [
    {
      icon: '🔧',
      title: 'Plumbing Services',
      description: 'Leaks, pipe repairs, installations, and bathroom fittings',
      price: 'Starting ₹299',
      popular: true,
      features: ['Emergency repairs', 'Pipe installations', 'Bathroom fittings'],
      rating: 4.9
    },
    {
      icon: '⚡',
      title: 'Electrical Work',
      description: 'Wiring, switches, fans, lights, and electrical repairs',
      price: 'Starting ₹249',
      features: ['Safety certified', 'Modern wiring', 'LED installations'],
      rating: 4.8
    },
    {
      icon: '🧹',
      title: 'Deep Cleaning',
      description: 'Home cleaning, kitchen, bathroom, and post-construction cleanup',
      price: 'Starting ₹499',
      features: ['Eco-friendly products', 'Deep sanitization', 'Post-construction'],
      rating: 4.9
    },
    {
      icon: '🔨',
      title: 'Carpentry',
      description: 'Furniture repair, door/window fixes, and custom woodwork',
      price: 'Starting ₹399',
      features: ['Custom furniture', 'Door repairs', 'Window fittings'],
      rating: 4.7
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-white via-kerala-beige/10 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kerala-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-kerala-yellow/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-kerala-green/10 px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-kerala-green" />
            <span className="text-kerala-green font-semibold">Professional Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-6">
            Our <span className="text-gradient-primary">Premium</span><br />
            <span className="text-gradient-secondary">Services</span>
          </h2>
          
          <p className="text-xl text-kerala-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Professional home services delivered by <span className="font-semibold text-kerala-green">verified local experts</span> in Thalassery. 
            Quality work guaranteed with transparent pricing and same-day service.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-kerala-green" />
              <span className="font-medium">Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-kerala-yellow" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-kerala-orange" />
              <span className="font-medium">4.9★ Average Rating</span>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreServices.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 ${
                service.popular ? 'border-kerala-yellow bg-gradient-to-br from-kerala-beige to-white' : 'border-gray-100'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-kerala-yellow text-kerala-charcoal text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-lg font-semibold text-kerala-charcoal font-poppins mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-kerala-charcoal opacity-70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center pt-0">
                <p className="text-lg font-semibold text-kerala-green mb-6">{service.price}</p>
                <Button 
                  className="w-full bg-kerala-green hover:bg-kerala-blue text-white rounded-lg"
                  onClick={() => window.open(`https://wa.me/918113936995?text=Hi! I need ${service.title} in Thalassery`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-kerala-green to-kerala-blue rounded-3xl p-8 lg:p-12 text-white text-center animate-scale-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              Need Something Else?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              We offer 20+ services including AC repair, painting, appliance fixing, and more. 
              Get instant quotes and same-day service!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button 
                  size="lg"
                  className="bg-white text-kerala-green hover:bg-kerala-beige font-semibold px-10 py-4 rounded-2xl btn-hover-lift"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-kerala-green font-semibold px-10 py-4 rounded-2xl btn-hover-lift"
                onClick={() => window.open('https://wa.me/918113936995?text=Hi! I need help with a service not listed on your website')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Custom Request
              </Button>
            </div>
            
            {/* Quick contact info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg opacity-90">
                📞 <span className="font-semibold">+91 81139 36995</span> • Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
