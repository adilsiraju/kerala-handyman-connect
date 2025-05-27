
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-kerala-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-4">
            Get in <span className="text-kerala-green">Touch</span>
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            Need help or have questions? We're here for you 24/7. Reach out through 
            any of these channels and we'll respond quickly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <Card className="bg-white border-2 border-transparent hover:border-kerala-green transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto bg-kerala-green/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-kerala-green" />
              </div>
              <CardTitle className="text-kerala-charcoal font-poppins">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-kerala-charcoal opacity-70 mb-4">
                Quick response, instant booking
              </p>
              <Button 
                className="w-full bg-kerala-green hover:bg-kerala-blue text-white"
                onClick={() => window.open('https://wa.me/918113936995?text=Hi HandyKerala! I need help with...')}
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="bg-white border-2 border-transparent hover:border-kerala-yellow transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto bg-kerala-yellow/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-kerala-yellow" />
              </div>
              <CardTitle className="text-kerala-charcoal font-poppins">Phone Call</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-kerala-charcoal opacity-70 mb-4">
                Speak directly with our team
              </p>
              <Button 
                className="w-full bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal"
                onClick={() => window.open('tel:+918113936995')}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-white border-2 border-transparent hover:border-kerala-orange transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto bg-kerala-orange/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-kerala-orange" />
              </div>
              <CardTitle className="text-kerala-charcoal font-poppins">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-kerala-charcoal opacity-70 mb-4">
                For detailed inquiries
              </p>
              <Button 
                className="w-full bg-kerala-orange hover:bg-kerala-orange/80 text-white"
                onClick={() => window.open('mailto:support@handykerala.com')}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-white border-2 border-transparent hover:border-kerala-blue transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto bg-kerala-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-kerala-blue" />
              </div>
              <CardTitle className="text-kerala-charcoal font-poppins">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-kerala-charcoal opacity-70 mb-4">
                Serving Thalassery & nearby areas
              </p>
              <p className="text-sm text-kerala-charcoal font-medium">
                Thalassery, Kerala 670101
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Operating Hours */}
        <Card className="bg-white shadow-lg border-2 border-kerala-green/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-kerala-charcoal font-poppins flex items-center justify-center">
              <Clock className="w-6 h-6 mr-3 text-kerala-green" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-kerala-charcoal mb-4 font-poppins">
                  Customer Support
                </h4>
                <div className="space-y-2 text-kerala-charcoal opacity-80">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-kerala-green/10 rounded-lg">
                    <p className="text-sm text-kerala-green font-medium">
                      📱 WhatsApp support available 24/7 for emergencies
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-kerala-charcoal mb-4 font-poppins">
                  Service Hours
                </h4>
                <div className="space-y-2 text-kerala-charcoal opacity-80">
                  <div className="flex justify-between">
                    <span>Regular Services:</span>
                    <span className="font-medium">8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Services:</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium">30 minutes avg.</span>
                  </div>
                  <div className="mt-4 p-3 bg-kerala-yellow/10 rounded-lg">
                    <p className="text-sm text-kerala-yellow font-medium">
                      🚨 Emergency plumbing & electrical services available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-kerala-charcoal font-poppins mb-6">
            Quick Actions
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-kerala-green hover:bg-kerala-blue text-white px-8 py-4 rounded-xl"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Service
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white px-8 py-4 rounded-xl"
              onClick={() => window.open('https://wa.me/918113936995?text=Hi! I have a question about HandyKerala services')}
            >
              Ask a Question
            </Button>
            <Button 
              size="lg"
              className="bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal px-8 py-4 rounded-xl"
              onClick={() => window.open('https://wa.me/918113936995?text=Hi! I need emergency service in Thalassery')}
            >
              Emergency Help
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
