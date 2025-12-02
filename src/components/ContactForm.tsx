import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactFormProps {
  type?: 'contact' | 'quote';
}

export function ContactForm({ type = 'contact' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    location: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Timber Frame Construction',
    'Garden Structures',
    'Bespoke Joinery',
    'Heritage Restoration',
    'Consultation Only',
    'Other'
  ];

  const timelines = [
    'As soon as possible',
    'Within 3 months',
    '3-6 months',
    '6-12 months',
    'More than 12 months',
    'Just exploring options'
  ];

  const budgetRanges = [
    'Under £5,000',
    '£5,000 - £15,000',
    '£15,000 - £30,000',
    '£30,000 - £50,000',
    '£50,000 - £100,000',
    'Over £100,000',
    'Prefer to discuss'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (type === 'quote' && !formData.projectType) {
      toast.error('Please select a project type for your quote.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint when deploying
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      if (type === 'quote') {
        toast.success('Quote request submitted successfully! We\'ll be in touch within 24 hours.');
      } else {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Something went wrong. Please try again or call us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-2xl text-gray-900 mb-4">
          {type === 'quote' ? 'Quote Request Submitted!' : 'Message Sent!'}
        </h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {type === 'quote' 
            ? 'Thank you for your quote request. Our team will review your requirements and get back to you within 24 hours with a detailed proposal.'
            : 'Thank you for contacting us. We\'ll get back to you as soon as possible.'
          }
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              projectType: '',
              timeline: '',
              budget: '',
              location: '',
              message: '',
              newsletter: false
            });
          }}
          variant="outline"
          className="border-amber-700 text-amber-700 hover:bg-amber-50"
        >
          Send Another {type === 'quote' ? 'Quote Request' : 'Message'}
        </Button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl text-gray-900 mb-4">
                {type === 'quote' ? 'Get Your Quote' : 'Get in Touch'}
              </h2>
              <p className="text-gray-600">
                {type === 'quote' 
                  ? 'Ready to start your project? Fill out the form and we\'ll provide you with a detailed quote tailored to your needs.'
                  : 'Have a question or want to discuss your project? We\'d love to hear from you.'
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Phone className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Phone</h4>
                  <a href="tel:07943526366" className="text-gray-600">07943526366</a>
                  <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Mail className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">inquiries@northernoakjoinery.com</p>
                  <p className="text-sm text-gray-500">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <MapPin className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Workshop</h4>
                  <p className="text-gray-600">
                    Northern Oak Joinery<br />
                    Kippax, Leeds<br />
                    LS25 7EF
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: Closed<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>
                  {type === 'quote' ? 'Request Your Quote' : 'Send us a Message'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, County"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  {type === 'quote' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {type === 'quote' ? 'Project Description *' : 'Message *'}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      placeholder={
                        type === 'quote'
                          ? 'Please describe your project in detail, including dimensions, requirements, and any specific features you have in mind...'
                          : 'How can we help you?'
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      className="cursor-pointer"
                      onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                      I'd like to receive updates about your latest projects and woodworking tips
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        {type === 'quote' ? 'Request Quote' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}