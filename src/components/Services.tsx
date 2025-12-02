import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Home, Building, Hammer, Ruler, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const OakRoofTrussesImage = '../src/assets/portfolio/oak_roof_trusses.webp';
const TimberFrameStructuresImage = '../src/assets/portfolio/timber_frame_structures.webp';
const BarnConversionsImage = '../src/assets/portfolio/barn_conversions.webp';
const HeritageRestorationImage = '../src/assets/portfolio/heritage_restoration.webp';

interface ServicesProps {
  onLearnMore?: (service: string) => void;
}

export function Services({ onLearnMore }: ServicesProps) {
  const services = [
    {
      id: 'roof-trusses',
      icon: <Home className="h-8 w-8" />,
      title: 'Oak Roof Trusses',
      description: 'Traditional and modern oak roof trusses designed and crafted using time-honored techniques for exceptional strength and beauty.',
      features: ['Structural calculations', 'Traditional mortise & tenon', 'Custom spans', 'Heritage approved'],
      image: OakRoofTrussesImage
    },
    {
      id: 'timber-frames',
      icon: <Building className="h-8 w-8" />,
      title: 'Timber Frame Structures',
      description: 'Complete oak timber frame buildings from barns and workshops to extensions and new builds using Yorkshire oak.',
      features: ['Full structural design', 'Sustainably sourced oak', 'Modern building regs', 'Traditional joinery'],
      image: TimberFrameStructuresImage
    },
    {
      id: 'barn-conversions',
      icon: <Hammer className="h-8 w-8" />,
      title: 'Barn Conversions',
      description: 'Sympathetic conversion of existing barns and agricultural buildings, preserving character while meeting modern standards.',
      features: ['Planning guidance', 'Listed building expertise', 'Character retention', 'Modern compliance'],
      image: BarnConversionsImage
    },
    {
      id: 'heritage-restoration',
      icon: <Ruler className="h-8 w-8" />,
      title: 'Heritage Restoration',
      description: 'Expert restoration of historic timber buildings using traditional methods, materials and conservation principles.',
      features: ['Conservation methods', 'Heritage expertise', 'Listed building work', 'Period authenticity'],
      image: HeritageRestorationImage
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 text-sm tracking-wide uppercase mb-4">Our Services</div>
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Oak Structures Built with Generational Knowledge
          </h2>
          <p className="text-lg text-gray-600">
            From roof trusses and timber frames to heritage restoration, our small team combines three generations 
            of traditional Yorkshire craftsmanship with modern structural engineering to create lasting oak structures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-amber-100 rounded-lg p-3 text-amber-700">
                      {service.icon}
                    </div>
                    <h3 className="text-xl text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 p-0"
                    onClick={() => onLearnMore?.(service.id)}
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12">
          <h3 className="text-2xl text-gray-900 mb-4">
            Complex structural project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every oak structure is unique, and our generational expertise means we can tackle complex challenges. 
            Tell us about your project and we'll apply decades of knowledge to make it a reality.
          </p>
          <Button 
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8"
            onClick={() => onLearnMore?.('custom')}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}