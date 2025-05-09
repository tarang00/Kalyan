
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    // Preload video resource - try from multiple sources
    const videoOptions = [
      '/clubBackground.mp4',
      'https://cdn.lovable.dev/videos/club1.mp4',
      'https://player.vimeo.com/progressive_redirect/playback/694617603/rendition/720p/file.mp4?loc=external&signature=996731a9a0df18d29f769e240a742e0f50b0404451edfad08ef8d98ed9714c07'
    ];
    
    // Try to load videos in sequence
    const tryLoadVideo = (index = 0) => {
      if (index >= videoOptions.length) {
        console.error('Video load error');
        createPlaceholderVideo();
        return;
      }
      
      const videoPreload = document.createElement('video');
      videoPreload.src = videoOptions[index];
      videoPreload.muted = true;
      videoPreload.playsInline = true;
      videoPreload.oncanplaythrough = () => {
        setVideoReady(true);
        setIsLoading(false);
      };
      videoPreload.onerror = () => {
        console.error('Video load error');
        // Try next video
        tryLoadVideo(index + 1);
      };
    };
    
    // Start loading videos
    tryLoadVideo();
    
    // Create fallback placeholder for demo purposes
    const createPlaceholderVideo = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1920;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          setIsLoading(false);
          return;
        }
        
        // Create a gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1A1F2C');
        gradient.addColorStop(0.5, '#221F26');
        gradient.addColorStop(1, '#1A1F2C');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add some animated particles
        ctx.fillStyle = 'rgba(155, 135, 245, 0.3)';
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const radius = Math.random() * 3 + 1;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Add text
        ctx.fillStyle = 'white';
        ctx.font = '60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('THE LORD OF THE DRINKS', canvas.width / 2, canvas.height / 2);
        
        // Use as background
        setVideoReady(true);
        setIsLoading(false);
        console.log('Using fallback background');
      } catch (error) {
        console.error('Error creating placeholder:', error);
        setIsLoading(false);
      }
    };

    // Check for Google Maps API
    window.addEventListener('load', () => {
      setMapsLoaded(true);
    });
    
    // Handle WebGL context errors
    const handleContextLost = () => {
      console.log('WebGL context lost, attempting recovery');
      toast({
        title: "3D effects limited",
        description: "Some visual effects may be reduced for better performance",
        duration: 5000,
      });
    };
    
    window.addEventListener('webglcontextlost', handleContextLost);
    
    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
      window.removeEventListener('load', () => {
        setMapsLoaded(true);
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-club-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-club-gold border-r-club-red border-b-club-gold border-l-club-red rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-display text-white text-lg">LOADING EXPERIENCE</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-full bg-club-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
