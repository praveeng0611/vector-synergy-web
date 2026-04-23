'use client';

import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import { HeroSkeleton } from '@/components/atoms/skeletons/home/heroSkeleton';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// ─── Slide data ────────────────────────────────────────────────────────────────
// Each slide has a unique video matched to its engineering theme.
//
// File             | Original         | Compressed  | Source
// my-video.mp4     | existing asset   | 7.4 MB      | (original hero video)
// hero-synergy.mp4 | 4K/50fps 19.8MB  | 2.6 MB H.264 + 1.7 MB WebM
// manufacturing-hero.mp4 | 1.7 MB    | gear/precision footage
// metal-rolling.mp4| ProRes 4K 254MB  | 741 KB      | hot rolling plant
// ampoules-vials.mp4| H.264 1080p 16.8MB | 5.2 MB   | pharma/precision vials

const slides = [
  {
    // Slide 1 — "Engineering Innovation" — original hero video (restored)
    mp4:   '/video/my-video.mp4',
    webm:  null,
    badge: 'Trusted Engineering Partner',
    heading: (
      <>
        Engineering Innovation.{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
          Delivered.
        </span>
      </>
    ),
    body: 'We deliver comprehensive engineering solutions from concept to production. Our expertise spans product design, simulation, prototyping, and manufacturing to accelerate your innovation journey.',
    cta1: { label: 'Get Started',      href: '/contact' },
    cta2: { label: 'Explore Services', href: '/services' },
  },
  {
    // Slide 2 — "CAE Simulation" — precision gear footage
    mp4:   '/video/manufacturing-hero.mp4',
    webm:  null,
    badge: 'Advanced CAE Simulation',
    heading: (
      <>
        Simulate.{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
          Optimize.
        </span>{' '}
        Perfect.
      </>
    ),
    body: 'Leverage cutting-edge CFD and FEA simulation to optimise your designs before physical testing. Our advanced analysis reduces costs, minimises risks, and accelerates your time-to-market.',
    cta1: { label: 'Learn More',    href: '/services#simulation' },
    cta2: { label: 'View Projects', href: '/projects' },
  },
  {
    // Slide 3 — "Manufacturing Excellence" — hot metal rolling plant
    mp4:   '/video/metal-rolling.mp4',
    webm:  null,
    badge: 'Manufacturing Excellence',
    heading: (
      <>
        Precision{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
          Manufacturing.
        </span>{' '}
        Guaranteed.
      </>
    ),
    body: 'Scale from prototype to production with confidence. Our contract manufacturing services — including hot-rolling, forming, and sheet-metal — ensure consistent quality and on-time delivery at any volume.',
    cta1: { label: 'Explore Manufacturing', href: '/services#manufacturing' },
    cta2: { label: 'Get Quote',             href: '/contact' },
  },
  {
    // Slide 4 — "R&D Innovation" — pharmaceutical ampoules & vials (precision filling)
    mp4:   '/video/ampoules-vials.mp4',
    webm:  null,
    badge: 'R&D Innovation Hub',
    heading: (
      <>
        Tomorrow&apos;s{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
          Innovations.
        </span>{' '}
        Today.
      </>
    ),
    body: "Push the boundaries of what's possible with our engineering R&D services. From precision-filling systems to proof-of-concept development, we turn breakthrough ideas into production-ready reality.",
    cta1: { label: 'Explore R&D',        href: '/services#erd' },
    cta2: { label: 'Innovation Stories', href: '/projects' },
  },
  {
    // Slide 5 — "Rapid Prototyping" — new customer hero-synergy video
    mp4:   '/video/hero-synergy.mp4',
    webm:  '/video/hero-synergy.webm',
    badge: 'Rapid Prototyping Excellence',
    heading: (
      <>
        From Concept to{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
          Reality.
        </span>
      </>
    ),
    body: 'Transform your ideas into tangible prototypes with precision and speed. Our advanced 3D printing, CNC machining, and fabrication capabilities bring your designs to life for testing and validation.',
    cta1: { label: 'Start Prototyping', href: '/services#prototyping' },
    cta2: { label: 'Our Process',       href: '/about' },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function Hero() {
  const [api, setApi]             = useState<CarouselApi>();
  const [current, setCurrent]     = useState(0);
  const [count, setCount]         = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => { setIsLoading(false); }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  if (isLoading) return <HeroSkeleton />;

  return (
    <section className="relative w-full overflow-hidden aspect-[9/15] md:aspect-[21/9]">
      <Carousel
        className="w-full h-full HomepageHeroCarousel"
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full ml-0">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="p-0 w-full h-full relative flex items-center">

              {/* ── Video background ─────────────────────────────────── */}
              <video
                autoPlay
                muted
                loop
                playsInline
                // Only eagerly load the first slide; defer the rest (LCP optimisation)
                preload={idx === 0 ? 'auto' : 'none'}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: 'brightness(0.65)' }}
              >
                {/* Offer WebM where available — VP9 is ~30% smaller than H.264 */}
                {slide.webm && <source src={slide.webm} type="video/webm" />}
                <source src={slide.mp4} type="video/mp4" />
              </video>

              {/* ── Overlay ──────────────────────────────────────────── */}
              <div className="absolute inset-0 bg-black/45 z-10" />

              {/* ── Content ──────────────────────────────────────────── */}
              <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
                <div className="text-center space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {slide.badge}
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                      {slide.heading}
                    </h1>
                    <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                      {slide.body}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                    <Button
                      asChild size="lg"
                      className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                    >
                      <Link href={slide.cta1.href}>
                        {slide.cta1.label}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild variant="accent-outline" size="lg"
                      className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                    >
                      <Link href={slide.cta2.href}>{slide.cta2.label}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="rounded-sm absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-40" />
        <CarouselNext    className="rounded-sm absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-40" />
      </Carousel>

      {/* ── Dot indicators ───────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-40">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              index === current - 1 ? 'bg-white w-8' : 'bg-white/50 w-2',
            )}
          />
        ))}
      </div>
    </section>
  );
}
