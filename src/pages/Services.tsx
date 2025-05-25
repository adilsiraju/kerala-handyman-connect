
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

const ServicesPage = () => {
  const allServices = [
    {
      icon: '🔧',
      title: 'Plumbing Services',
      description: 'Leaks, pipe repairs, installations, bathroom fittings, water heater repairs',
      price: 'Starting ₹299',
      popular: true,
      features: ['Emergency leak repairs', 'Pipe installations', 'Bathroom fittings', 'Water heater service']
    },
    {
      icon: '⚡',
      title: 'Electrical Work',
      description: 'Wiring, switches, fans, lights, electrical repairs, and safety checks',
      price: 'Starting ₹249',
      features: ['Wiring repairs', 'Switch installations', 'Fan & light fitting', 'Safety inspections']
    },
    {
      icon: '🧹',
      title: 'Deep Cleaning',
      description: 'Home cleaning, kitchen, bathroom, and post-construction cleanup',
      price: 'Starting ₹499',
      features: ['Kitchen deep clean', 'Bathroom sanitization', 'Floor & window cleaning', 'Post-construction cleanup']
    },
    {
      icon: '🔨',
      title: 'Carpentry',
      description: 'Furniture repair, door/window fixes, and custom woodwork',
      price: 'Starting ₹399',
      features: ['Furniture repair', 'Door & window fixes', 'Custom shelving', 'Wood polishing']
    },
    {
      icon: '🎨',
      title: 'Painting',
      description: 'Interior and exterior painting, wall treatments, and touch-ups',
      price: 'Starting ₹350',
      features: ['Interior painting', 'Exterior painting', 'Wall texturing', 'Touch-up services']
    },
    {
      icon: '❄️',
      title: 'AC Services',
      description: 'AC installation, repair, maintenance, and gas refilling',
      price: 'Starting ₹599',
      features: ['AC installation', 'Repair services', 'Maintenance', 'Gas refilling']
    },
    {
      icon: '📱',
      title: 'Appliance Repair',
      description: 'Washing machine, refrigerator, microwave, and other appliance repairs',
      price: 'Starting ₹450',
      features: ['Washing machine repair', 'Refrigerator service', 'Microwave repair', 'Other appliances']
    },
    {
      icon: '🏠',
      title: 'Home Maintenance',
      description: 'General home repairs, maintenance checks, and preventive services',
      price: 'Starting ₹299',
      features: ['General repairs', 'Maintenance checks', 'Preventive care', 'Emergency fixes']
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-kerala-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-6">
            Our <span className="text-kerala-green">Services</span>
          </h1>
          <p className="text-xl text-kerala-charcoal opacity-70 max-w-3xl mx-auto mb-8">
            Professional home services delivered by verified local experts in Thalassery. 
            Quality work guaranteed with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-kerala-green hover:bg-kerala-blue text-white px-8 py-4 rounded-xl"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I want to book a service in Thalassery')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Any Service
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white px-8 py-4 rounded-xl"
              onClick={() => window.open('tel:+919876543210')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
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
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-kerala-charcoal font-poppins mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-kerala-charcoal opacity-70 mb-4">
                    {service.description}
                  </CardDescription>
                  <p className="text-xl font-semibold text-kerala-green">{service.price}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-medium text-kerala-charcoal mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-kerala-charcoal opacity-80">
                          <div className="w-2 h-2 bg-kerala-green rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-kerala-green hover:bg-kerala-blue text-white rounded-lg"
                    onClick={() => window.open(`https://wa.me/919876543210?text=Hi! I need ${service.title} in Thalassery`)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Services Notice */}
          <div className="mt-16 bg-gradient-to-r from-kerala-green to-kerala-blue rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold font-poppins mb-4">Emergency Services Available</h3>
            <p className="text-xl opacity-90 mb-6">
              Need urgent help? We're available 24/7 for plumbing and electrical emergencies.
            </p>
            <Button 
              size="lg"
              className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium px-8 py-4 rounded-xl"
              onClick={() => window.open('https://wa.me/919876543210?text=Hi! I have an emergency service request in Thalassery')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Emergency WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
