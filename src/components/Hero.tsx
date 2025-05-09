import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [contentReady, setContentReady] = useState(false);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
    
    // Add a slight delay before showing content to ensure smooth transitions
    setTimeout(() => {
      setContentReady(true);
    }, 500);
  }, []);
  
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/herotop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-30 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center transition-opacity duration-1000 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-club-red to-club-gold mb-6 opacity-0 animate-fade-in">
          THE LORD OF THE <span className="text-club-gold">DRINKS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          Experience the finest nightlife in Kalyan
        </p>
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a href="#events" className="btn-primary">
            Upcoming Events
          </a>
          <a href="#contact" className="btn-outline">
            Book Your Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
