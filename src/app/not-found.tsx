import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-4xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. 
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-md mx-auto">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
        
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Quick Links
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/projects"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>
            If you believe this is an error, please{' '}
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
} 