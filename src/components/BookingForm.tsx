
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, Send, Phone, Clock, CheckCircle, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const services = [
    'Plumbing Services',
    'Electrical Work',
    'Deep Cleaning',
    'Carpentry',
    'Painting',
    'AC Services',
    'Appliance Repair',
    'Custom Service'
  ];

  const handleQuickBook = () => {
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const message = `Hi HandyKerala! I need a service booking:

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}

Please contact me to confirm the appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/918113936995?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 30 minutes"
    });

    setFormData({ name: '', phone: '', service: '' });
  };
  return (
    <section id="booking" className="py-20 lg:py-32 bg-gradient-to-br from-kerala-beige via-white to-kerala-beige relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-kerala-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-kerala-yellow rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-kerala-green/10 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-kerala-green" />
            <span className="text-kerala-green font-medium">Quick Booking</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-kerala-charcoal font-poppins mb-6 leading-tight">
            Book Your{' '}
            <span className="bg-gradient-to-r from-kerala-green to-kerala-yellow bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <p className="text-xl text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            Get connected with verified professionals in minutes. We'll call you back within 30 minutes!
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-kerala-green/20 animate-fadeInUp overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-kerala-green via-kerala-blue to-kerala-green text-white relative">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative z-10 text-center">
              <CardTitle className="text-3xl font-bold font-poppins flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 mr-3 animate-bounce" />
                Professional Service Booking
              </CardTitle>
              <CardDescription className="text-lg text-white/90">
                Fill the form below and we'll connect you with the right expert
              </CardDescription>
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>30min response</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Verified experts</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9★ rated</span>
                </div>
              </div>
            </div>
          </CardHeader>          <CardContent className="p-12">
            <div className="space-y-8">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <Label htmlFor="name" className="text-kerala-charcoal font-semibold text-lg flex items-center">
                    Your Name
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="mt-3 border-2 border-kerala-green/30 focus:border-kerala-green h-14 text-lg rounded-xl transition-all duration-300 group-hover:border-kerala-green/50"
                  />
                </div>

                <div className="group">
                  <Label htmlFor="phone" className="text-kerala-charcoal font-semibold text-lg flex items-center">
                    Phone Number
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 81139 36995"
                    className="mt-3 border-2 border-kerala-green/30 focus:border-kerala-green h-14 text-lg rounded-xl transition-all duration-300 group-hover:border-kerala-green/50"
                  />
                </div>

                <div className="group">
                  <Label htmlFor="service" className="text-kerala-charcoal font-semibold text-lg flex items-center">
                    Service Needed
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-3 border-2 border-kerala-green/30 focus:border-kerala-green h-14 text-lg rounded-xl transition-all duration-300 group-hover:border-kerala-green/50">
                      <SelectValue placeholder="Select your service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-lg">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-kerala-green to-kerala-blue hover:from-kerala-blue hover:to-kerala-green text-white font-bold py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
                  onClick={handleQuickBook}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Send className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Quick Book via WhatsApp</span>
                </Button>

                <Button 
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-kerala-yellow to-kerala-orange hover:from-kerala-orange hover:to-kerala-yellow text-kerala-charcoal font-bold py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
                  onClick={() => window.open('tel:+918113936995')}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Phone className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Call Us Directly</span>
                </Button>
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="mt-12 bg-gradient-to-r from-kerala-beige to-white rounded-2xl p-8 text-center border-2 border-kerala-green/10">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-kerala-green rounded-full animate-pulse"></div>
                  <span className="text-kerala-green font-bold text-lg">Available Now</span>
                  <div className="w-3 h-3 bg-kerala-green rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-kerala-charcoal text-xl font-medium mb-2">
                <strong>Need immediate help?</strong> Our experts are standing by!
              </p>
              <p className="text-kerala-charcoal text-lg">
                Call us at{' '}
                <a href="tel:+918113936995" className="text-kerala-green font-bold hover:underline text-xl">
                  +91 81139 36995
                </a>
                {' '}for instant support!
              </p>
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-kerala-charcoal opacity-70">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-kerala-green" />
                  <span>Average response: 15 minutes</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-kerala-yellow" />
                  <span>4.9/5 customer satisfaction</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
