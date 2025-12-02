import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface PortfolioProps {
  onViewProject?: (projectId: string) => void;
  onViewWork?: () => void;
}

export function Portfolio({ onViewProject, onViewWork  }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 'church-roof-trusses',
      category: 'roof-trusses',
      title: 'Church Roof Trusses',
      location: 'Ripon, Yorkshire',
      date: '2024',
      description: 'Traditional oak roof trusses for heritage church restoration using mortise and tenon joinery.',
      tags: ['Roof Trusses', 'Church'],
      image: 'https://images.unsplash.com/photo-1723122893153-4e09c49be998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&h=400',
      featured: true
    },
    {
      id: 'yorkshire-barn-conversion',
      category: 'barn-conversions',
      title: 'Yorkshire Barn Conversion',
      location: 'Harrogate, Yorkshire',
      date: '2024',
      description: 'Sympathetic conversion of 17th-century barn preserving original oak frame and character.',
      tags: ['Barn Conversion', 'Listed Building'],
      image: 'https://images.unsplash.com/photo-1715855752720-7c8147ba9d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&h=400',
      featured: true
    },
    {
      id: 'traditional-timber-frame',
      category: 'timber-frames',
      title: 'Traditional Timber Frame Workshop',
      location: 'Knaresborough, Yorkshire',
      date: '2023',
      description: 'Complete oak frame workshop built using traditional Yorkshire timber framing techniques.',
      tags: ['Timber Frame', 'Workshop', 'Traditional'],
      image: 'https://images.unsplash.com/photo-1717535196586-e1e81d17ce94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&h=400',
      featured: true
    },
    {
      id: 'oak-beam-restoration',
      category: 'timber-frames',
      title: 'Tudor House Oak Beams',
      location: 'York, Yorkshire',
      date: '2023',
      description: 'Restoration and replacement of oak ceiling beams in Grade II listed Tudor house.',
      tags: ['Restoration', 'Tudor', 'Listed Building'],
      image: 'https://images.unsplash.com/photo-1676250747209-eee2d728da64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&h=400',
      featured: false
    },
    {
      id: 'new-build-trusses',
      category: 'roof-trusses',
      title: 'New Build Oak Trusses',
      location: 'Wetherby, Yorkshire',
      date: '2023',
      description: 'Contemporary oak roof trusses for new family home blending modern and traditional design.',
      tags: ['Roof Trusses', 'New Build', 'Contemporary'],
      image: 'https://images.unsplash.com/photo-1738666830212-ff16d849bf39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&h=400',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'roof-trusses', label: 'Roof Trusses' },
    { id: 'timber-frames', label: 'Timber Frames' },
    { id: 'barn-conversions', label: 'Barn Conversions' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-700 text-sm tracking-wide uppercase mb-4">Our Portfolio</div>
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Three Generations of Oak Structures
          </h2>
          <p className="text-lg text-gray-600">
            Each project showcases our family's commitment to traditional Yorkshire craftsmanship. 
            From heritage restoration to new builds, see how we apply generational knowledge to every structure.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1 bg-white border">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="py-3 px-4 data-[state=active]:bg-amber-700 data-[state=active]:text-white cursor-pointer"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-amber-700 text-white z-5">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => onViewProject?.(project.id)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-amber-50 text-amber-700 hover:bg-amber-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more examples of our work?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8"
            onClick={onViewWork}
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}