
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, MapPin, Star, Users, Award, CheckCircle, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-kerala-green" />,
      title: 'Verified Professionals',
      description: 'All our handymen are background-checked, licensed, and skilled professionals with years of experience',
      badge: 'Trusted',
      color: 'kerala-green'
    },
    {
      icon: <Clock className="w-12 h-12 text-kerala-yellow" />,
      title: 'Same Day Service',
      description: 'Lightning-fast response times with most services available within 2-4 hours of booking',
      badge: 'Fast',
      color: 'kerala-yellow'
    },
    {
      icon: <MapPin className="w-12 h-12 text-kerala-orange" />,
      title: 'Local to Thalassery',
      description: 'Born and raised in Kerala, we understand local needs, culture, and building styles perfectly',
      badge: 'Local',
      color: 'kerala-orange'
    }
  ];
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-kerala-beige via-white to-kerala-beige relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-kerala-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-kerala-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-kerala-green/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-kerala-green" />
            <span className="text-kerala-green font-medium">Why We're Different</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-6 leading-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-kerala-green to-kerala-yellow bg-clip-text text-transparent">
              HandyKerala
            </span>
            ?
          </h2>
          <p className="text-xl text-kerala-charcoal opacity-70 max-w-3xl mx-auto leading-relaxed">
            We're not just another service platform. We're your neighbors, committed to making 
            home maintenance stress-free for every family in Thalassery with unmatched quality and care.
          </p>
        </div>        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-${feature.color} transition-all duration-500 hover:shadow-2xl group animate-fadeInUp relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute top-0 right-0 bg-${feature.color} text-white px-3 py-1 text-xs font-semibold rounded-bl-lg`}>
                {feature.badge}
              </div>
              <CardContent className="p-8 text-center relative">
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 bg-${feature.color}/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-kerala-charcoal font-poppins mb-4 group-hover:text-kerala-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-kerala-charcoal opacity-70 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <CheckCircle className={`w-6 h-6 text-${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>        {/* Enhanced Stats */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl animate-fadeInUp">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-kerala-charcoal font-poppins mb-4">
              Trusted by Thalassery Families
            </h3>
            <p className="text-kerala-charcoal opacity-70">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-kerala-green mr-2" />
                <div className="text-4xl lg:text-5xl font-bold text-kerala-green font-poppins animate-countUp">1000+</div>
              </div>
              <p className="text-kerala-charcoal opacity-70 font-medium">Happy Customers</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-kerala-yellow fill-current" />
                ))}
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-kerala-yellow mr-2" />
                <div className="text-4xl lg:text-5xl font-bold text-kerala-yellow font-poppins animate-countUp">75+</div>
              </div>
              <p className="text-kerala-charcoal opacity-70 font-medium">Skilled Professionals</p>
              <p className="text-xs text-kerala-green mt-1">Verified & Insured</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-kerala-orange mr-2" />
                <div className="text-4xl lg:text-5xl font-bold text-kerala-orange font-poppins">2hrs</div>
              </div>
              <p className="text-kerala-charcoal opacity-70 font-medium">Avg Response Time</p>
              <p className="text-xs text-kerala-green mt-1">Same Day Service</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-kerala-green mr-2" />
                <div className="text-4xl lg:text-5xl font-bold text-kerala-green font-poppins">100%</div>
              </div>
              <p className="text-kerala-charcoal opacity-70 font-medium">Satisfaction Rate</p>
              <p className="text-xs text-kerala-green mt-1">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
