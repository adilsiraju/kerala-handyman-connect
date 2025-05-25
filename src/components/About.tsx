
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, MapPin, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-4">
            About <span className="text-kerala-green">HandyKerala</span>
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            Born in Kerala, built for Malayalis. We're on a mission to make reliable 
            home services accessible to every family in Thalassery and beyond.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-kerala-charcoal font-poppins mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-kerala-charcoal opacity-80">
              <p>
                HandyKerala was born out of a simple frustration - finding reliable home service 
                professionals in Thalassery was always a challenge. As locals who grew up here, 
                we knew there were skilled artisans and technicians, but connecting them with 
                families in need was the missing piece.
              </p>
              <p>
                We started HandyKerala to bridge this gap. By combining technology with our 
                deep understanding of local needs, we've created a platform that puts quality, 
                trust, and community first.
              </p>
              <p>
                Today, we're proud to serve families across Thalassery while providing 
                sustainable income opportunities for local professionals. We're not just a 
                service platform - we're your neighbors, committed to making your life easier.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-kerala-green to-kerala-blue rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h4 className="text-xl font-bold text-kerala-charcoal font-poppins mb-2">
                  Made for Kerala Homes
                </h4>
                <p className="text-kerala-charcoal opacity-70">
                  Understanding local needs, culture, and challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Heart className="w-8 h-8 text-kerala-green" />,
              title: 'Community First',
              description: 'We prioritize local community growth and sustainable development'
            },
            {
              icon: <Users className="w-8 h-8 text-kerala-yellow" />,
              title: 'Trust & Reliability',
              description: 'Every professional is verified and committed to quality service'
            },
            {
              icon: <MapPin className="w-8 h-8 text-kerala-orange" />,
              title: 'Local Expertise',
              description: 'Deep understanding of Kerala homes and local requirements'
            },
            {
              icon: <Target className="w-8 h-8 text-kerala-blue" />,
              title: 'Customer Success',
              description: 'Your satisfaction drives our innovation and service improvements'
            }
          ].map((value, index) => (
            <Card key={index} className="bg-kerala-beige border-2 border-transparent hover:border-kerala-green transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-kerala-charcoal font-poppins mb-3">
                  {value.title}
                </h4>
                <p className="text-kerala-charcoal opacity-70">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-kerala-green to-kerala-blue rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins mb-6">Our Mission</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            "To make reliable, quality home services accessible to every family in Kerala, 
            while empowering local professionals with technology and sustainable income opportunities. 
            We believe in building stronger communities, one home at a time."
          </p>
          <div className="mt-8 text-kerala-yellow font-semibold">
            - The HandyKerala Team
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-kerala-charcoal font-poppins mb-6">
            Currently Serving
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Thalassery', 'Dharmadam', 'Mahe', 'Chokli', 'Kadirur', 'Eranholi', 'Pinarayi'].map((area) => (
              <span 
                key={area} 
                className="bg-kerala-beige text-kerala-charcoal px-4 py-2 rounded-full font-medium border-2 border-kerala-green/20"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-kerala-charcoal opacity-70">
            Expanding to more areas across North Kerala soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
