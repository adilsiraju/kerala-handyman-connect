
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Plumbing Services',
      description: 'Leaks, pipe repairs, installations, and bathroom fittings',
      price: 'Starting ₹299',
      popular: true
    },
    {
      icon: '⚡',
      title: 'Electrical Work',
      description: 'Wiring, switches, fans, lights, and electrical repairs',
      price: 'Starting ₹249'
    },
    {
      icon: '🧹',
      title: 'Deep Cleaning',
      description: 'Home cleaning, kitchen, bathroom, and post-construction cleanup',
      price: 'Starting ₹499'
    },
    {
      icon: '🔨',
      title: 'Carpentry',
      description: 'Furniture repair, door/window fixes, and custom woodwork',
      price: 'Starting ₹399'
    },
    {
      icon: '🎨',
      title: 'Painting',
      description: 'Interior/exterior painting, wall repairs, and touch-ups',
      price: 'Starting ₹15/sq ft'
    },
    {
      icon: '❄️',
      title: 'AC Services',
      description: 'AC installation, repair, maintenance, and gas refilling',
      price: 'Starting ₹349'
    },
    {
      icon: '📱',
      title: 'Appliance Repair',
      description: 'TV, fridge, washing machine, and electronic repairs',
      price: 'Starting ₹199'
    },
    {
      icon: '🏠',
      title: 'Home Maintenance',
      description: 'General repairs, tile work, and home improvement',
      price: 'Starting ₹299'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-4">
            Our <span className="text-kerala-green">Services</span>
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            Professional home services delivered by verified local experts in Thalassery. 
            Quality work guaranteed with transparent pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
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
              
              <CardHeader className="text-center">
                <div className="text-4xl mb-3">{service.icon}</div>
                <CardTitle className="text-lg font-semibold text-kerala-charcoal font-poppins">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-kerala-charcoal opacity-70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-kerala-green mb-4">{service.price}</p>
                <Button 
                  className="w-full bg-kerala-green hover:bg-kerala-blue text-white rounded-lg"
                  onClick={() => window.open(`https://wa.me/919876543210?text=Hi! I need ${service.title} in Thalassery`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-kerala-green to-kerala-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold font-poppins mb-4">Need a Custom Service?</h3>
          <p className="text-lg opacity-90 mb-6">
            Don't see what you're looking for? We can help with most home maintenance needs!
          </p>
          <Button 
            size="lg"
            className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium px-8 py-4 rounded-xl"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need a custom service in Thalassery')}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Us for Custom Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
