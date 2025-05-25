
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Nair',
      location: 'Thalassery',
      rating: 5,
      text: 'HandyKerala saved my day! My kitchen sink was leaking badly and they sent someone within 2 hours. Professional work and fair pricing.',
      service: 'Plumbing'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Dharmadam',
      rating: 5,
      text: 'മലയാളത്തിൽ സംസാരിക്കാൻ കഴിയുന്നത് വളരെ സുഖകരമായിരുന്നു. വീടിന്റെ painting work നന്നായി ചെയ്തു തന്നു.',
      service: 'Painting'
    },
    {
      name: 'Anitha Menon',
      location: 'Thalassery',
      rating: 5,
      text: 'Quick response for AC repair during summer. The technician was knowledgeable and explained everything clearly. Highly recommend!',
      service: 'AC Services'
    },
    {
      name: 'Mohammed Rashid',
      location: 'Mahe',
      rating: 5,
      text: 'Electrical work done perfectly. No mess, clean job, and reasonable rates. HandyKerala is now my go-to for home services.',
      service: 'Electrical'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-4">
            What Our <span className="text-kerala-green">Customers</span> Say
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-3xl mx-auto">
            Real reviews from real people in Thalassery and surrounding areas. 
            Your satisfaction is our success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-kerala-beige border-2 border-transparent hover:border-kerala-green transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-kerala-yellow fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-kerala-charcoal opacity-70">
                    {testimonial.service}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-kerala-charcoal mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-kerala-charcoal font-poppins">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-kerala-charcoal opacity-70">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-2xl">👤</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-kerala-charcoal opacity-70 mb-4">
            Join hundreds of satisfied customers in Thalassery
          </p>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-kerala-yellow fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-kerala-charcoal">
              4.9/5 Average Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
