import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    // Scroll to top when changing pages
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleGetQuote = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewWork = () => {
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <div className="min-h-screen">
            <Services onLearnMore={handleGetQuote} />
            <Testimonials onGetQuote={handleGetQuote} />
          </div>
        );

      case 'portfolio':
        return (
          <div className="min-h-screen">
            <Portfolio onViewProject={handleGetQuote} />
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl text-gray-900 mb-6">
                  Inspired by our work?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Every project starts with a conversation. Let's discuss your vision 
                  and see how we can bring it to life with our expert craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setCurrentPage('configurator')}
                    className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md transition-colors cursor-pointer"
                  >
                    Try Our Design Tool
                  </button>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    className="border border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-md transition-colors cursor-pointer"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'configurator':
        return (
          <div className="min-h-screen">
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl text-gray-900 mb-6">
                  Need help with your design?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our expert team is here to help you create the perfect oak structure. 
                  Get in touch for personalized guidance and professional advice.
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md transition-colors"
                >
                  Speak to an Expert
                </button>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="min-h-screen">
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="text-amber-700 text-sm tracking-wide uppercase mb-4">About Us</div>
                    <h1 className="text-3xl lg:text-5xl text-gray-900 mb-6">
                      Three Generations of Craftsmanship
                    </h1>
                    <p className="text-lg text-gray-600">
                      Since 1999, Northern Oak Joinery has been creating exceptional timber 
                      structures across Yorkshire and beyond.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                      <h2 className="text-2xl text-gray-900 mb-6">Our Story</h2>
                      <div className="space-y-4 text-gray-600">
                        <p>
                          Founded by master craftsman Robert Harrison in 1999, Northern Oak Joinery 
                          began as a small workshop specializing in traditional timber framing techniques. 
                          What started as a passion for preserving age-old woodworking methods has grown 
                          into Yorkshire's most trusted name in oak construction.
                        </p>
                        <p>
                          Today, under the leadership of Robert's son James, we continue to honor 
                          traditional techniques while embracing modern design and sustainable practices. 
                          Our team of skilled craftsmen combines decades of experience with cutting-edge 
                          technology to deliver exceptional results.
                        </p>
                        <p>
                          Every piece of oak we use is sustainably sourced from local forests, 
                          supporting both the environment and the local economy. We believe that 
                          quality craftsmanship and environmental responsibility go hand in hand.
                        </p>
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-amber-100 rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=450&fit=crop&crop=center"
                        alt="Our workshop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-12 mb-16">
                    <div className="text-center mb-12">
                      <h2 className="text-2xl text-gray-900 mb-4">Our Values</h2>
                      <p className="text-gray-600">
                        These principles guide everything we do, from sourcing materials 
                        to the final installation.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🌳</span>
                        </div>
                        <h3 className="text-lg text-gray-900 mb-2">Sustainability</h3>
                        <p className="text-gray-600 text-sm">
                          We source all our oak from sustainably managed local forests, 
                          ensuring minimal environmental impact.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">⚒️</span>
                        </div>
                        <h3 className="text-lg text-gray-900 mb-2">Craftsmanship</h3>
                        <p className="text-gray-600 text-sm">
                          Traditional techniques passed down through generations, 
                          combined with modern precision and attention to detail.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-amber-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <span className="text-xl">🤝</span>
                        </div>
                        <h3 className="text-lg text-gray-900 mb-2">Partnership</h3>
                        <p className="text-gray-600 text-sm">
                          We work closely with our clients from concept to completion, 
                          ensuring every project exceeds expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Testimonials onGetQuote={handleGetQuote} />
          </div>
        );

      case 'contact':
        return (
          <div className="min-h-screen">
            <ContactForm type="quote" />
          </div>
        );

      default:
        return (
          <div>
            <Hero onGetQuote={handleGetQuote} onViewWork={handleViewWork} />
            <Services onLearnMore={handleGetQuote} />
            <Portfolio onViewProject={handleGetQuote} />
            <Testimonials onGetQuote={handleGetQuote} />
            <ContactForm type="contact" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={handlePageChange} />
      <Toaster />
    </div>
  );
}

export default App;