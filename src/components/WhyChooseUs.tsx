
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Shield, Star, Users, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-kerala-green" />,
      title: 'Verified Professionals',
      description: 'All our handymen are background-checked and skilled professionals'
    },
    {
      icon: <Clock className="w-8 h-8 text-kerala-yellow" />,
      title: 'Same Day Service',
      description: 'Quick response times with most services available the same day'
    },
    {
      icon: <Star className="w-8 h-8 text-kerala-orange" />,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a satisfaction guarantee'
    },
    {
      icon: <MapPin className="w-8 h-8 text-kerala-green" />,
      title: 'Local to Thalassery',
      description: 'Born and raised in Kerala, we understand local needs'
    },
    {
      icon: <Users className="w-8 h-8 text-kerala-blue" />,
      title: 'Malayalam Support',
      description: 'Communicate comfortably in Malayalam or English'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-kerala-yellow" />,
      title: 'Transparent Pricing',
      description: 'No hidden charges, clear pricing before we start work'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-kerala-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-4">
            Why Choose <span className="text-kerala-green">HandyKerala</span>?
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            We're not just another service platform. We're your neighbors, committed to making 
            home maintenance stress-free for every family in Thalassery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-2 border-transparent hover:border-kerala-green transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-kerala-charcoal font-poppins mb-3">
                  {feature.title}
                </h3>
                <p className="text-kerala-charcoal opacity-70">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-green font-poppins mb-2">500+</div>
            <p className="text-kerala-charcoal opacity-70">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-yellow font-poppins mb-2">50+</div>
            <p className="text-kerala-charcoal opacity-70">Skilled Professionals</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-orange font-poppins mb-2">24/7</div>
            <p className="text-kerala-charcoal opacity-70">Customer Support</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-blue font-poppins mb-2">100%</div>
            <p className="text-kerala-charcoal opacity-70">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
