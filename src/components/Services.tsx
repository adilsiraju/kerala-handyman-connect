
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const coreServices = [
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
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-6">
            Our <span className="text-kerala-green">Services</span>
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-2xl mx-auto">
            Professional home services delivered by verified local experts in Thalassery. 
            Quality work guaranteed with transparent pricing.
          </p>
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
                  onClick={() => window.open(`https://wa.me/919876543210?text=Hi! I need ${service.title} in Thalassery`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <p className="text-kerala-charcoal opacity-70 mb-6">
            Looking for other services like AC repair, painting, or appliance fixing?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white font-medium px-8 py-4 rounded-xl"
            onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need a custom service in Thalassery')}
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
