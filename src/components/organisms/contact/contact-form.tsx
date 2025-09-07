'use client';

import { Send, Clock, CheckCircle, Users, ArrowRight, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Contact form section for Contact page
 * Displays comprehensive project inquiry form with additional information cards
 */
export function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    timeline: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: '',
          timeline: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setStatusMessage('');
    }, 5000);
  };

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Emergency Support', hours: '24/7 Available' },
  ];

  const serviceAreas = [
    'Product Design & Development',
    'CAD Modeling & Simulation',
    'Prototyping & Testing',
    'Manufacturing Support',
    'Process Optimization',
    'Quality Assurance',
  ];

  return (
    <section
      id="contact-form"
      className="py-24 sm:py-32 min-h-[100dvh] bg-gradient-to-br from-muted/30 to-accent isolate relative animate-fade-in flex items-center justify-center"
    >
      {/* <Image
        src="/images/layered-slants.svg"
        alt=""
        width={1000}
        height={100}
        className="w-full object-cover mb-24 sm:mb-32 -mt-1"
        loading="lazy"
      /> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Form */}
          <div className="space-y-8">
            <SectionHeading
              subtitle="Send Us a Message"
              title="Start Your Project Today"
              description="Tell us about your engineering challenges and we'll get back to you within 24 hours."
              centered={false}
              // textColor="text-white"
            />

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Project Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91-9765210570"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="cad-design">Product Design & CAD</option>
                    <option value="erd">E-R&D Services</option>
                    <option value="prototyping">Prototyping</option>
                    <option value="simulation">CAE Simulation</option>
                    <option value="testing">Testing & Validation</option>
                    <option value="process-design">Process Design</option>
                    <option value="sourcing">Strategic Sourcing</option>
                    <option value="manufacturing">Contract Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="fast">Fast Track (1-2 months)</option>
                    <option value="standard">Standard (3-6 months)</option>
                    <option value="extended">Extended (6+ months)</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {status === 'success' && <CheckCircle className="mr-2 h-5 w-5" />}
                  {status === 'loading' 
                    ? 'Sending...' 
                    : status === 'success' 
                      ? 'Message Sent!' 
                      : 'Send Message'
                  }
                  {status === 'idle' && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>

                {statusMessage && (
                  <div 
                    className={`
                      text-sm text-center p-3 rounded-md
                      ${status === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : status === 'error' 
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : ''
                      }
                    `}
                  >
                    {statusMessage}
                  </div>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border/40 last:border-0"
                  >
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Our Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {serviceAreas.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">10+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24h</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
