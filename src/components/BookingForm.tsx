
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, Send, Phone } from 'lucide-react';
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

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 30 minutes"
    });

    setFormData({ name: '', phone: '', service: '' });
  };

  return (
    <section id="booking" className="py-20 lg:py-32 bg-kerala-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-xl border-2 border-kerala-green/20">
          <CardHeader className="text-center bg-gradient-to-r from-kerala-green to-kerala-blue text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold font-poppins flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3" />
              Book Your Service
            </CardTitle>
            <CardDescription className="text-lg text-white/90">
              Quick booking - we'll call you back within 30 minutes
            </CardDescription>
          </CardHeader>

          <CardContent className="p-12">
            <div className="space-y-8">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="name" className="text-kerala-charcoal font-medium text-lg">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="mt-3 border-kerala-green/30 focus:border-kerala-green h-12 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-kerala-charcoal font-medium text-lg">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="mt-3 border-kerala-green/30 focus:border-kerala-green h-12 text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-kerala-charcoal font-medium text-lg">
                    Service Needed
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-3 border-kerala-green/30 focus:border-kerala-green h-12 text-lg">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg"
                  className="flex-1 bg-kerala-green hover:bg-kerala-blue text-white font-medium py-6 rounded-xl text-lg"
                  onClick={handleQuickBook}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Quick Book via WhatsApp
                </Button>

                <Button 
                  size="lg"
                  className="flex-1 bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium py-6 rounded-xl text-lg"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Directly
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-kerala-beige rounded-xl text-center">
              <p className="text-kerala-charcoal text-lg">
                <strong>Need immediate help?</strong> Call us at{' '}
                <a href="tel:+919876543210" className="text-kerala-green font-semibold hover:underline">
                  +91 98765 43210
                </a>
                {' '}for instant support!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
