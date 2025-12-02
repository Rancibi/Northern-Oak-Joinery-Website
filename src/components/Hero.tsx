import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const HeroImage = '../src/assets/portfolio/hero-image.webp';

interface HeroProps {
  onGetQuote?: () => void;
  onViewWork?: () => void;
}

export function Hero({ onGetQuote, onViewWork }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-amber-700">
                <Award className="h-5 w-5" />
                <span className="text-sm tracking-wide uppercase">Award-winning craftsmanship</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl text-gray-900 leading-tight">
                Traditional Oak
                <span className="block text-amber-700">Trusses & Beams</span>
                <span className="block">Three Generations Strong</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Yorkshire's trusted specialists in oak structural work. From roof trusses and timber frames 
                to heritage restoration and barn conversions, we honor traditional techniques with modern precision.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-amber-200">
              <div className="text-center">
                <div className="text-2xl text-amber-700 mb-1">3</div>
                <div className="text-sm text-gray-600">Generations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-amber-700 mb-1">200+</div>
                <div className="text-sm text-gray-600">Structures Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-amber-700 mb-1">75+</div>
                <div className="text-sm text-gray-600">Years Combined Experience</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetQuote}
                size="lg" 
                className="bg-amber-700 hover:bg-amber-800 text-white px-8"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={onViewWork}
                variant="outline" 
                size="lg"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-amber-100 shadow-2xl">
              <ImageWithFallback
                src={HeroImage}
                alt="Traditional oak timber framing and roof trusses"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm">Small Expert Team</div>
                  <div className="text-xs text-gray-500">3 master craftsmen</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm">Heritage Techniques</div>
                  <div className="text-xs text-gray-500">Traditional joinery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}