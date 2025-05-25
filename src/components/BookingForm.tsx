
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    description: ''
  });

  const services = [
    'Plumbing Services',
    'Electrical Work',
    'Deep Cleaning',
    'Carpentry',
    'Painting',
    'AC Services',
    'Appliance Repair',
    'Home Maintenance',
    'Custom Service'
  ];

  const locations = [
    'Thalassery Town',
    'Dharmadam',
    'Mahe',
    'Chokli',
    'Kadirur',
    'Eranholi',
    'Pinarayi',
    'Other (specify in description)'
  ];

  const timeSlots = [
    '9:00 AM - 12:00 PM',
    '12:00 PM - 3:00 PM',
    '3:00 PM - 6:00 PM',
    '6:00 PM - 9:00 PM',
    'Flexible'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi HandyKerala! I need a service booking:

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Location: ${formData.location}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Description: ${formData.description}

Please confirm my booking. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your appointment"
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      location: '',
      preferredDate: '',
      preferredTime: '',
      description: ''
    });
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-kerala-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-xl border-2 border-kerala-green/20">
          <CardHeader className="text-center bg-gradient-to-r from-kerala-green to-kerala-blue text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold font-poppins flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3" />
              Book Your Service
            </CardTitle>
            <CardDescription className="text-lg text-white/90">
              Fill out the form below and we'll get back to you within 30 minutes
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-kerala-charcoal font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    className="mt-2 border-kerala-green/30 focus:border-kerala-green"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-kerala-charcoal font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                    className="mt-2 border-kerala-green/30 focus:border-kerala-green"
                    required
                  />
                </div>
              </div>

              {/* Service and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service" className="text-kerala-charcoal font-medium">
                    Service Needed *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-2 border-kerala-green/30 focus:border-kerala-green">
                      <SelectValue placeholder="Select a service" />
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

                <div>
                  <Label htmlFor="location" className="text-kerala-charcoal font-medium">
                    Location *
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                    <SelectTrigger className="mt-2 border-kerala-green/30 focus:border-kerala-green">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-kerala-charcoal font-medium">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    className="mt-2 border-kerala-green/30 focus:border-kerala-green"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-kerala-charcoal font-medium">
                    Preferred Time
                  </Label>
                  <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                    <SelectTrigger className="mt-2 border-kerala-green/30 focus:border-kerala-green">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-kerala-charcoal font-medium">
                  Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your issue or any specific requirements..."
                  className="mt-2 border-kerala-green/30 focus:border-kerala-green"
                  rows={4}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="flex-1 bg-kerala-green hover:bg-kerala-blue text-white font-medium py-4 rounded-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </Button>

                <Button 
                  type="button"
                  size="lg"
                  className="flex-1 bg-kerala-yellow hover:bg-kerala-orange text-kerala-charcoal font-medium py-4 rounded-xl"
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi! I need help with booking a service')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quick WhatsApp
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-kerala-beige rounded-xl text-center">
              <p className="text-kerala-charcoal">
                <strong>Need immediate help?</strong> Call us at{' '}
                <a href="tel:+919876543210" className="text-kerala-green font-semibold hover:underline">
                  +91 98765 43210
                </a>
                {' '}or WhatsApp us for instant support!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
