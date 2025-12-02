import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
const logo = '../src/assets/northernOakJoinery_Logo.webp';

interface HeaderProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export function Header({ currentPage = 'home', onPageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    if (onPageChange) {
      onPageChange(pageId);
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={logo} alt="Northern Oak Joinery" className="h-10 w-10" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-amber-900">NORTHERN OAK</div>
              <div className="text-sm text-amber-700">JOINERY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors hover:text-amber-700 cursor-pointer ${
                  currentPage === item.id ? 'text-amber-800 border-b-2 border-amber-700' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a href="tel:07943526366">07943526366</a>
            </div>
            <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <img src={logo} alt="Northern Oak Joinery" className="h-8 w-8" />
                  <div>
                    <div className="font-bold text-amber-900">NORTHERN OAK</div>
                    <div className="text-sm text-amber-700">JOINERY</div>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left py-2 px-4 rounded transition-colors ${
                        currentPage === item.id 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="border-t pt-4 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>01423 123456</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>info@northernoakjoinery.com</span>
                  </div>
                  <Button 
                    onClick={() => handleNavClick('contact')}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}