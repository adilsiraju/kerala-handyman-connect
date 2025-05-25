
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
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-kerala-charcoal font-poppins mb-6">
            What Our <span className="text-kerala-green">Customers</span> Say
          </h2>
          <p className="text-lg text-kerala-charcoal opacity-70 max-w-2xl mx-auto">
            Real reviews from real people in Thalassery and surrounding areas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-kerala-beige border-2 border-transparent hover:border-kerala-green transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-kerala-yellow fill-current" />
                  ))}
                  <span className="ml-3 text-sm text-kerala-charcoal opacity-70 bg-white px-2 py-1 rounded">
                    {testimonial.service}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-kerala-charcoal mb-6 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-kerala-charcoal font-poppins text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-kerala-charcoal opacity-70">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-3xl">👤</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Rating Display */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-kerala-yellow fill-current" />
            ))}
          </div>
          <p className="text-xl font-semibold text-kerala-charcoal">
            4.9/5 Average Rating from 500+ customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
