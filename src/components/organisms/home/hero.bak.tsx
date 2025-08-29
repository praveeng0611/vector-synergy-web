'use client';

import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
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

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    // Immediate loading for better LCP
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section className="relative w-full overflow-hidden pb-10 lg:pb-20">
      <Carousel
        className="w-full h-full HomepageHeroCarousel"
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full ml-0 py-10 lg:py-20">
          {/* Slide 1: Main Engineering Innovation */}
          <CarouselItem className="p-0 w-full h-full relative">
            <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Trusted Engineering Partner
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-delay-400">
                      Engineering Innovation.{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-500">
                        Delivered.
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground animate-delay-600">
                      We deliver comprehensive engineering solutions from concept to production. Our
                      expertise spans product design, simulation, prototyping, and manufacturing to
                      accelerate your innovation journey.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-delay-800">
                    <Button
                      asChild
                      size="lg"
                      className="text-base hover-scale transition-all duration-200 hover:shadow-lg"
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base hover-scale transition-all duration-200"
                    >
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-3/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center isolate relative">
                  <div className="w-full h-full rounded-2xl bg-accent absolute top-4 -left-4 -z-1"></div>
                  <Image
                    src="/images/6.png"
                    alt="Engineering Innovation Solutions"
                    width={600}
                    height={400}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 2: */}
          <CarouselItem className="p-0 w-full h-full relative">
            <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Advanced CAE Simulation
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-delay-400">
                      Simulate.{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-500">
                        Optimize.
                      </span>{' '}
                      Perfect.
                    </h1>
                    <p className="text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground animate-delay-600">
                      Leverage cutting-edge CFD and FEA simulation to optimize your designs before
                      physical testing. Our advanced analysis reduces costs, minimizes risks, and
                      accelerates your time-to-market.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-delay-800">
                    <Button
                      asChild
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Link href="/services#simulation">
                        Learn More
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                    >
                      <Link href="/projects">View Projects</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-3/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center isolate relative">
                  <div className="w-full h-full rounded-2xl bg-accent absolute top-4 -left-4 -z-1"></div>
                  <Image
                    src="/images/2.png"
                    alt="Engineering Innovation Solutions"
                    width={600}
                    height={400}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 3: */}
          <CarouselItem className="p-0 w-full h-full relative">
            <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Rapid Prototyping Excellence
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-delay-400">
                      From Concept to{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-500">
                        Reality.
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground animate-delay-600">
                      Transform your ideas into tangible prototypes with precision and speed. Our
                      advanced 3D printing, CNC machining, and fabrication capabilities bring your
                      designs to life for testing and validation.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-delay-800">
                    <Button
                      asChild
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Link href="/services#prototyping">
                        Start Prototyping
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                    >
                      <Link href="/about">Our Process</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-3/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center isolate relative">
                  <div className="w-full h-full rounded-2xl bg-accent absolute top-4 -left-4 -z-1"></div>
                  <Image
                    src="/images/3.png"
                    alt="Engineering Innovation Solutions"
                    width={600}
                    height={400}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 4: */}
          <CarouselItem className="p-0 w-full h-full relative">
            <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Manufacturing Excellence
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-delay-400">
                      Precision{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-500">
                        Manufacturing.
                      </span>{' '}
                      Guaranteed.
                    </h1>
                    <p className="text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground animate-delay-600">
                      Scale from prototype to production with confidence. Our contract manufacturing
                      services ensure consistent quality, on-time delivery, and cost-effective
                      production at any volume.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-delay-800">
                    <Button
                      asChild
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Link href="/services#manufacturing">
                        Explore Manufacturing
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-3/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center isolate relative">
                  <div className="w-full h-full rounded-2xl bg-accent absolute top-4 -left-4 -z-1"></div>
                  <Image
                    src="/images/4.png"
                    alt="Engineering Innovation Solutions"
                    width={600}
                    height={400}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 5: */}
          <CarouselItem className="p-0 w-full h-full relative">
            <div className="w-full h-full relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="w-full h-full grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary animate-delay-200">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      R&D Innovation Hub
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-delay-400">
                      Tomorrow's{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-500">
                        Innovations.
                      </span>{' '}
                      Today.
                    </h1>
                    <p className="text-base sm:text-lg leading-6 sm:leading-8 text-muted-foreground animate-delay-600">
                      Push the boundaries of what's possible with our engineering research and
                      development services. From breakthrough technologies to proof-of-concept
                      development, we turn visionary ideas into reality.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 animate-delay-800">
                    <Button
                      asChild
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Link href="/services#erd">
                        Explore R&D
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                    >
                      <Link href="/projects">Innovation Stories</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-3/2 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl flex items-center justify-center isolate relative">
                  <div className="w-full h-full rounded-2xl bg-accent absolute top-4 -left-4 -z-1"></div>
                  <Image
                    src="/images/5.png"
                    alt="Engineering Innovation Solutions"
                    width={600}
                    height={400}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover rounded-2xl hover-scale transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="rounded-sm absolute top-[100%] lg:top-1/2 lg:-translate-y-1/2 left-[20%] lg:left-[4%]" />
        <CarouselNext className="rounded-sm absolute top-[100%] lg:top-1/2 lg:-translate-y-1/2 right-[20%] lg:right-[4%]" />
      </Carousel>
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'bg-foreground w-2 h-2 rounded-full',
              index === current - 1 ? 'bg-primary' : 'bg-accent',
            )}
          ></span>
        ))}
      </div>
    </section>
  );
}
