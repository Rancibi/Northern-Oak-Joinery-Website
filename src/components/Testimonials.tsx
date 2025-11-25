import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

interface TestimonialsProps {
  onGetQuote?: () => void;
}

export function Testimonials({ onGetQuote }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Thompson',
      location: 'Harrogate, Yorkshire',
      rating: 5,
      text: 'Northern Oak Joinery exceeded our expectations with our oak frame extension. The quality of craftsmanship is exceptional, and the team was professional throughout. Our new space feels like it\'s been part of our home forever.',
      project: 'Oak Frame Extension',
      avatar: 'ST'
    },
    {
      id: 2,
      name: 'Michael Richardson',
      location: 'York, Yorkshire',
      rating: 5,
      text: 'The garden pavilion they built for us is absolutely stunning. Every detail was carefully considered, from the traditional joinery to the modern touches. It\'s become the heart of our outdoor entertaining.',
      project: 'Garden Pavilion',
      avatar: 'MR'
    },
    {
      id: 3,
      name: 'Emma and James Foster',
      location: 'Leeds, Yorkshire',
      rating: 5,
      text: 'We commissioned a bespoke staircase and couldn\'t be happier. The attention to detail and traditional techniques used are remarkable. It\'s not just functional - it\'s a work of art.',
      project: 'Bespoke Staircase',
      avatar: 'EJ'
    },
    {
      id: 4,
      name: 'Robert Clarke',
      location: 'Ripon, Yorkshire',
      rating: 5,
      text: 'The restoration of our heritage barn was handled with incredible care and expertise. They respected the building\'s history while making it perfect for modern living. Highly recommended.',
      project: 'Heritage Restoration',
      avatar: 'RC'
    },
    {
      id: 5,
      name: 'Lisa Winters',
      location: 'Knaresborough, Yorkshire',
      rating: 5,
      text: 'From initial consultation to final installation, the service was outstanding. The oak pergola they created has transformed our garden into a beautiful outdoor room. Worth every penny.',
      project: 'Oak Pergola',
      avatar: 'LW'
    }
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextTestimonial, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 text-sm tracking-wide uppercase mb-4">Client Testimonials</div>
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Northern Oak Joinery.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 ">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-amber-600 mx-auto mb-6" />
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-900 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-amber-700 text-white">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <div className="text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="text-xs text-amber-700 mt-1">
                    {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl text-amber-700 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-amber-700 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-amber-700 mb-2">98%</div>
            <div className="text-sm text-gray-600">Repeat Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-amber-700 mb-2">25+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl text-gray-900 mb-4">
            Ready to join our satisfied clients?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey with Northern Oak Joinery today. Get a free consultation 
            and discover how we can bring your vision to life.
          </p>
          <Button 
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8"
            onClick={onGetQuote}
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}