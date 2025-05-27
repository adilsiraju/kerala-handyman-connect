
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, MapPin, Calendar, Award, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Nair',
      location: 'Thalassery',
      rating: 5,
      text: 'HandyKerala saved my day! My kitchen sink was leaking badly and they sent someone within 2 hours. Professional work and fair pricing. Absolutely recommended!',
      service: 'Plumbing',
      date: 'Last week',
      avatar: '👩',
      verified: true
    },
    {
      name: 'Rajesh Kumar',
      location: 'Dharmadam',
      rating: 5,
      text: 'മലയാളത്തിൽ സംസാരിക്കാൻ കഴിയുന്നത് വളരെ സുഖകരമായിരുന്നു. വീടിന്റെ painting work നന്നായി ചെയ്തു തന്നു. Quality ഒത്തിരി നല്ലത്!',
      service: 'Painting',
      date: '2 weeks ago',
      avatar: '👨',
      verified: true
    },
    {
      name: 'Sreelatha Menon',
      location: 'Kannur',
      rating: 5,
      text: 'Excellent electrical work! They fixed my fan and lighting issues quickly. Very professional team and reasonable pricing. Will definitely call them again.',
      service: 'Electrical',
      date: '1 month ago',
      avatar: '👩‍🦳',
      verified: true
    },
    {
      name: 'Mohammed Ismail',
      location: 'Payyannur',
      rating: 5,
      text: 'AC service was top-notch. They came on time, completed the work efficiently, and explained everything clearly. Great customer service!',
      service: 'AC Repair',
      date: '3 weeks ago',
      avatar: '👨‍🔧',
      verified: true
    }
  ];
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-kerala-beige/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-1/4 w-32 h-32 bg-kerala-green rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-kerala-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-kerala-green/10 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-kerala-green" />
            <span className="text-kerala-green font-medium">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-6 leading-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-kerala-green to-kerala-yellow bg-clip-text text-transparent">
              Customers
            </span>{' '}
            Say
          </h2>
          <p className="text-xl text-kerala-charcoal opacity-70 max-w-3xl mx-auto leading-relaxed">
            Real reviews from real people in Thalassery and surrounding areas. 
            Their satisfaction is our greatest achievement.
          </p>
        </div>        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-kerala-green transition-all duration-500 hover:shadow-2xl group animate-fadeInUp relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-kerala-green to-kerala-yellow opacity-10 rounded-bl-full"></div>
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-8 h-8 text-kerala-green" />
                </div>

                {/* Rating & Service Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-kerala-yellow fill-current mr-1" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-kerala-green bg-kerala-green/10 px-3 py-1 rounded-full font-medium">
                      {testimonial.service}
                    </span>                    {testimonial.verified && (
                      <div title="Verified Review">
                        <Award className="w-4 h-4 text-kerala-yellow" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-kerala-charcoal mb-6 leading-relaxed text-lg group-hover:text-kerala-charcoal/90 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-bold text-kerala-charcoal font-poppins text-lg">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center text-sm text-kerala-charcoal opacity-70 space-x-3">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {testimonial.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {testimonial.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>        {/* Enhanced Rating Display */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl animate-fadeInUp">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-kerala-yellow fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-kerala-green font-poppins">4.9</div>
                <p className="text-sm text-kerala-charcoal opacity-70">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kerala-yellow font-poppins">1000+</div>
                <p className="text-sm text-kerala-charcoal opacity-70">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kerala-orange font-poppins">98%</div>
                <p className="text-sm text-kerala-charcoal opacity-70">Recommend Us</p>
              </div>
            </div>
            <p className="text-lg font-medium text-kerala-charcoal">
              Trusted by families across Thalassery and beyond
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
