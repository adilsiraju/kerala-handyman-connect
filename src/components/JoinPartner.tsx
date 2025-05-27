
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Users, Wrench } from 'lucide-react';

const JoinPartner = () => {
  const benefits = [
    'Steady income from verified customer bookings',
    'Flexible working hours - work when you want',
    'No commission fees for the first 3 months',
    'Marketing support - we bring customers to you',
    'Insurance coverage for all registered partners',
    'Training and skill development opportunities',
    'Direct payment - no delays or hassles',
    'Local community support and networking'
  ];

  const requirements = [
    'Valid ID proof and address verification',
    'Minimum 2 years experience in your field',
    'Own tools and equipment',
    'Professional attitude and reliability',
    'Good communication skills (Malayalam/English)',
    'Clean background verification'
  ];

  return (
    <section id="partner" className="py-16 lg:py-24 bg-gradient-to-br from-kerala-green to-kerala-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4">
              <Users className="w-12 h-12" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins mb-4">
            Join as a <span className="text-kerala-yellow">Partner</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Are you a skilled professional? Join HandyKerala and grow your business with 
            verified customers across Thalassery.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white font-poppins flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-kerala-yellow" />
                Why Partner with Us?
              </CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Join our growing network of trusted professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-kerala-yellow mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Requirements & CTA */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white font-poppins flex items-center">
                  <Wrench className="w-6 h-6 mr-3 text-kerala-yellow" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-kerala-yellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-white/90">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold font-poppins mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-6 text-lg">
                Join over 50+ professionals already earning with HandyKerala
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium py-4 rounded-xl"
                  onClick={() => window.open('https://wa.me/918113936995?text=Hi! I want to join HandyKerala as a service partner. Please send me the registration details.')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Apply via WhatsApp
                </Button>
                  <p className="text-sm text-white/70">
                  Or call us at{' '}
                  <a href="tel:+918113936995" className="text-kerala-yellow hover:underline font-medium">
                    +91 81139 36995
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-yellow font-poppins mb-2">50+</div>
            <p className="text-white/80">Active Partners</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-yellow font-poppins mb-2">₹15k</div>
            <p className="text-white/80">Avg Monthly Earning</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-yellow font-poppins mb-2">4.9⭐</div>
            <p className="text-white/80">Partner Rating</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-kerala-yellow font-poppins mb-2">24h</div>
            <p className="text-white/80">Registration Process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinPartner;
