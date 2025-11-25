import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  Award,
  Shield,
  Truck
} from 'lucide-react';
// Note: Replace with your actual logo URL when deploying
const logo = 'https://images.unsplash.com/photo-1516035519623-60b13b3ed394?w=80&h=80&fit=crop&crop=center';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    if (onPageChange) {
      onPageChange(pageId);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    if (!email) {
      return;
    }
    
    // Replace with actual newsletter signup API when deploying
    console.log('Newsletter signup for:', email);
    
    // Show success feedback
    const input = (e.target as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement;
    if (input) {
      input.value = '';
      input.placeholder = 'Thank you for subscribing!';
      setTimeout(() => {
        input.placeholder = 'Your email address';
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Northern Oak Joinery" className="h-12 w-12" />
              <div>
                <div className="text-xl text-amber-400">NORTHERN OAK</div>
                <div className="text-sm text-amber-300">JOINERY</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Northern England's premier oak joinery specialists. Creating beautiful, 
              durable structures that combine traditional craftsmanship with modern design.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-400">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-amber-400">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'configurator', label: 'Design Tool' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-gray-300 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-amber-400">Our Services</h4>
            <div className="space-y-3">
              {[
                'Oak Roof Trusses',
                'Timber Frame Structures',
                'Barn Conversions',
                'Heritage Restoration',
                'Structural Beams',
                'Design Consultation'
              ].map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-amber-400">Get in Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-300">01423 123456</div>
                  <div className="text-gray-400 text-xs">Mon-Fri 8am-6pm</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-300">info@northernoakjoinery.com</div>
                  <div className="text-gray-400 text-xs">We reply within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Oak Tree Farm<br />
                  Harrogate, North Yorkshire<br />
                  HG2 8QR
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-gray-700 pt-6">
              <h5 className="text-amber-400 text-sm mb-3">Newsletter</h5>
              <p className="text-gray-300 text-xs mb-4">
                Get updates on our latest projects and woodworking tips.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="w-full bg-amber-700 hover:bg-amber-800"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Awards */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Award className="h-6 w-6 text-amber-400" />
              <div>
                <div className="text-sm text-amber-400">FSC Certified</div>
                <div className="text-xs text-gray-400">Sustainable Wood Sourcing</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-amber-400" />
              <div>
                <div className="text-sm text-amber-400">Fully Insured</div>
                <div className="text-xs text-gray-400">£2M Public Liability</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6 text-amber-400" />
              <div>
                <div className="text-sm text-amber-400">Local Delivery</div>
                <div className="text-xs text-gray-400">Free within 25 miles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Northern Oak Joinery. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-amber-400 transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button className="hover:text-amber-400 transition-colors cursor-pointer">
                Terms of Service
              </button>
              <button className="hover:text-amber-400 transition-colors cursor-pointer">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}