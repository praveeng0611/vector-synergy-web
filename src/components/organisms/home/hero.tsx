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

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  // Video data for each slide - currently using same video, but structured for individual videos
  // TO ADD INDIVIDUAL VIDEOS: Simply replace the src paths below with unique video files
  // Example: "/video/engineering-innovation.mp4", "/video/simulation.mp4", etc.
  // NOTE: All videos will autoplay when their slide comes into view
  const slideVideos = [
    {
      src: "/video/my-video.mp4", // Future: "/video/engineering-innovation.mp4"
      title: "Engineering Innovation",
      alt: "Engineering Innovation Video Background"
    },
    {
      src: "/video/my-video.mp4", // Future: "/video/simulation.mp4"
      title: "CAE Simulation",
      alt: "CAE Simulation Video Background"
    },
    {
      src: "/video/my-video.mp4", // Future: "/video/prototyping.mp4"
      title: "Rapid Prototyping",
      alt: "Rapid Prototyping Video Background"
    },
    {
      src: "/video/my-video.mp4", // Future: "/video/manufacturing.mp4"
      title: "Manufacturing Excellence",
      alt: "Manufacturing Excellence Video Background"
    },
    {
      src: "/video/my-video.mp4", // Future: "/video/rnd-innovation.mp4"
      title: "R&D Innovation",
      alt: "R&D Innovation Video Background"
    }
  ];

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
    <section className="relative w-full overflow-hidden aspect-[9/15] md:aspect-[21/9]">
      <Carousel
        className="w-full h-full HomepageHeroCarousel"
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full ml-0">
          {/* Slide 1: Main Engineering Innovation */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 1 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-0"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[0].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Trusted Engineering Partner
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Engineering Innovation.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Delivered.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    We deliver comprehensive engineering solutions from concept to production. Our
                    expertise spans product design, simulation, prototyping, and manufacturing to
                    accelerate your innovation journey.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 2: Advanced CAE Simulation */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 2 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-1"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[1].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Advanced CAE Simulation
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Simulate.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Optimize.
                    </span>{' '}
                    Perfect.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Leverage cutting-edge CFD and FEA simulation to optimize your designs before
                    physical testing. Our advanced analysis reduces costs, minimizes risks, and
                    accelerates your time-to-market.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#simulation">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 3: Rapid Prototyping Excellence */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 3 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-2"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[2].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Rapid Prototyping Excellence
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    From Concept to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Reality.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Transform your ideas into tangible prototypes with precision and speed. Our
                    advanced 3D printing, CNC machining, and fabrication capabilities bring your
                    designs to life for testing and validation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#prototyping">
                      Start Prototyping
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/about">Our Process</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 4: Manufacturing Excellence */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 4 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-3"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[3].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Manufacturing Excellence
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Precision{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Manufacturing.
                    </span>{' '}
                    Guaranteed.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Scale from prototype to production with confidence. Our contract manufacturing
                    services ensure consistent quality, on-time delivery, and cost-effective
                    production at any volume.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#manufacturing">
                      Explore Manufacturing
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 5: R&D Innovation Hub */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 5 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-4"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[4].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    R&D Innovation Hub
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Tomorrow's{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Innovations.
                    </span>{' '}
                    Today.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Push the boundaries of what's possible with our engineering research and
                    development services. From breakthrough technologies to proof-of-concept
                    development, we turn visionary ideas into reality.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#erd">
                      Explore R&D
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/projects">Innovation Stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 6: Advanced CAE Simulation */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 2 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-1"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[1].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Advanced CAE Simulation
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Simulate.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Optimize.
                    </span>{' '}
                    Perfect.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Leverage cutting-edge CFD and FEA simulation to optimize your designs before
                    physical testing. Our advanced analysis reduces costs, minimizes risks, and
                    accelerates your time-to-market.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#simulation">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 7: Rapid Prototyping Excellence */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 3 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-2"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[2].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Rapid Prototyping Excellence
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    From Concept to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Reality.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Transform your ideas into tangible prototypes with precision and speed. Our
                    advanced 3D printing, CNC machining, and fabrication capabilities bring your
                    designs to life for testing and validation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#prototyping">
                      Start Prototyping
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/about">Our Process</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 8: Manufacturing Excellence */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 4 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-3"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[3].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Manufacturing Excellence
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Precision{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Manufacturing.
                    </span>{' '}
                    Guaranteed.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Scale from prototype to production with confidence. Our contract manufacturing
                    services ensure consistent quality, on-time delivery, and cost-effective
                    production at any volume.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#manufacturing">
                      Explore Manufacturing
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Slide 9: R&D Innovation Hub */}
          <CarouselItem className="p-0 w-full h-full relative flex items-center">
            {/* Video Background for Slide 5 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 hero-slide-video hero-slide-video-4"
              style={{ filter: 'brightness(0.7)' }}
            >
              <source src={slideVideos[4].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            
            <div className="w-full h-full relative mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-center z-20">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white animate-delay-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    R&D Innovation Hub
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl animate-delay-400">
                    Tomorrow's{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-sky-400">
                      Innovations.
                    </span>{' '}
                    Today.
                  </h1>
                  <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-white/90 max-w-3xl mx-auto animate-delay-600">
                    Push the boundaries of what's possible with our engineering research and
                    development services. From breakthrough technologies to proof-of-concept
                    development, we turn visionary ideas into reality.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-800">
                  <Button
                    asChild
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 hover:shadow-lg bg-primary hover:bg-primary/90"
                  >
                    <Link href="/services#erd">
                      Explore R&D
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="accent-outline"
                    size="lg"
                    className="text-base hover-scale transition-all duration-200 border-white/30 text-white hover:bg-white/10"
                  >
                    <Link href="/projects">Innovation Stories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="rounded-sm absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-40" />
        <CarouselNext className="rounded-sm absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-40" />
      </Carousel>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 z-40">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              index === current - 1 ? 'bg-white w-8' : 'bg-white/50',
            )}
          ></span>
        ))}
      </div>
    </section>
  );
}
