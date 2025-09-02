/* eslint-disable jsx-a11y/no-redundant-roles */
/**
 * Footer component
 */
import { Linkedin, Facebook, Youtube, Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

/**
 * Footer component
 * @returns ReactElement
 */
export function Footer(): ReactElement {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');

      // Reset error message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  const footerNavigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Product Design & CAD', href: '/services#cad' },
      { name: 'E-R&D', href: '/services#erd' },
      { name: 'Prototyping', href: '/services#prototyping' },
      { name: 'CAE Simulation', href: '/services#simulation' },
    ],
    support: [
      { name: 'Testing & Validation', href: '/services#testing' },
      { name: 'Process Design', href: '/services#process' },
      { name: 'Cost Sourcing', href: '/services#sourcing' },
      { name: 'Manufacturing', href: '/services#manufacturing' },
    ],
  };

  return (
    <footer
      className="border-t border-border"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <Link
              href="/"
              className="flex items-center p-2 rounded-2xl bg-white/90 w-fit backdrop-blur-2xl"
            >
              <Image
                className="h-[120px] w-[120px]"
                src="/logo-full.svg"
                alt="Vector Synergy"
                width={120}
                height={120}
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Engineering innovation delivered through comprehensive solutions from design to
              manufacturing. Your trusted partner for end-to-end product development.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid md:grid-cols-2 gap-3 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-3">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Core Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-3">
              <div className='mt-10 md:mt-0'>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <div className="space-y-2">
                  {/* Newsletter Subscription */}
                  <div className="space-y-4 pb-6 border-b border-border/50">
                    <div>
                      <h3 className="text-sm font-semibold leading-6 text-foreground">
                        Stay Updated
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Get engineering insights and project updates
                      </p>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <div>
                        <label htmlFor="newsletter-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          disabled={status === 'loading'}
                          className={`
                            w-full px-3 py-2 text-sm bg-background border rounded-md
                            placeholder:text-muted-foreground
                            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                            disabled:opacity-50 disabled:cursor-not-allowed
                            transition-colors duration-200
                            ${status === 'error' ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border'}
                          `}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`
                          w-full px-4 py-2 text-sm font-medium rounded-md
                          bg-primary text-primary-foreground
                          hover:bg-primary/90 disabled:hover:bg-primary
                          focus:outline-none focus:ring-2 focus:ring-primary/20
                          disabled:opacity-50 disabled:cursor-not-allowed
                          transition-all duration-200
                          active:scale-[0.98]
                          flex items-center justify-center gap-2
                        `}
                      >
                        {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                        {status === 'success' && <Check className="h-4 w-4" />}
                        {status === 'idle' || status === 'error' ? (
                          <Send className="h-4 w-4" />
                        ) : null}
                        {status === 'loading'
                          ? 'Subscribing...'
                          : status === 'success'
                            ? 'Subscribed!'
                            : 'Subscribe'}
                      </button>
                    </form>

                    {message && (
                      <p
                        className={`
                        text-xs transition-all duration-300 animate-in fade-in slide-in-from-top-1
                        ${status === 'success' ? 'text-primary' : 'text-destructive'}
                      `}
                      >
                        {message}
                      </p>
                    )}

                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="pt-8 mt-0 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Engineering Excellence Center</span>
              </div>
              <span className='hidden md:block'>.</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+91-9765210570" className="hover:text-foreground transition-colors">
                  +91 9765210570
                </a>
              </div>
              <span className='hidden md:block'>.</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@vector-synergy.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@vector-synergy.com
                </a>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://facebook.com/vector-synergy"
                className="group relative p-2 rounded-full text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/25 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              </a>
              <a
                href="https://youtube.com/@vector-synergy"
                className="group relative p-2 rounded-full text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/25 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              </a>
              <a
                href="https://linkedin.com/company/vector-synergy"
                className="group relative p-2 rounded-full text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-white hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/25 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-4 border-t border-border pt-8 sm:mt-4 lg:mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Vector Synergy. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <Link
                href="/privacy"
                className="text-xs leading-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/tnc"
                className="text-xs leading-5 text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
