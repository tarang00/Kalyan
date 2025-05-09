
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Random club/nightlife images
  const images = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "DJ mixing at nightclub" 
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Nightclub crowd" 
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Cocktail preparation" 
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Club dancers" 
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Nightclub lights" 
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "VIP lounge area" 
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-club-dark" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`section-heading ${inView ? 'animate-fade-in' : ''}`}>
            GALLERY <span className="text-club-gold">GLIMPSES</span>
          </h2>
          <p className={`section-text ${inView ? 'animate-fade-in' : ''}`}>
            Step inside and experience the vibrant energy of The Lord of the Drinks Kalyan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={cn(
                "aspect-square rounded-lg overflow-hidden cursor-pointer group relative",
                inView ? 'opacity-0 animate-fade-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-3xl font-display text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                View
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className={cn(
              "btn-outline", 
              inView ? 'opacity-0 animate-fade-in' : 'opacity-0'
            )}
            style={{ animationDelay: '800ms' }}
          >
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
