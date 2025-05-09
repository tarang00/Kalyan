
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-club-black to-club-dark" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`section-heading ${inView ? 'animate-fade-in' : ''}`}>
            WELCOME TO THE <span className="text-club-gold">EXPERIENCE</span>
          </h2>
          <p className={`section-text ${inView ? 'animate-fade-in' : ''}`}>
            The Lord of the Drinks Kalyan is the perfect fusion of extraordinary ambiance,
            signature cocktails, and immersive entertainment. Our venue offers a premium nightlife
            experience with state-of-the-art sound and lighting systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`glass p-8 rounded-xl hover:shadow-lg hover:shadow-club-gold/20 transition-all duration-300
                ${inView ? 'opacity-0 animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-club-gold/20 rounded-full flex items-center justify-center">
                <feature.icon className="text-club-gold" size={32} />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// This would normally be imported from lucide-react but we're mocking it
const features = [
  {
    title: "Premium Drinks",
    description: "Enjoy our extensive menu of handcrafted cocktails, premium spirits and exclusive wines, all served with impeccable style.",
    icon: ({ className, size }: { className?: string, size?: number }) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
        width={size}
        height={size}
      >
        <path d="M8 22h8"></path>
        <path d="M12 11v11"></path>
        <path d="M18.5 2H6a2 2 0 0 0-2 2v3c0 1.4.5 2.8 1.4 3.9"></path>
        <path d="M5.4 10.9l12.1 4.6a2 2 0 0 0 2.6-1.2L22 8.5"></path>
      </svg>
    )
  },
  {
    title: "Vibrant Atmosphere",
    description: "Immerse yourself in our captivating ambiance with cutting-edge lighting design and world-class sound systems.",
    icon: ({ className, size }: { className?: string, size?: number }) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
        width={size}
        height={size}
      >
        <path d="M12 2v8"></path>
        <path d="m4.93 10.93 1.41 1.41"></path>
        <path d="M2 18h2"></path>
        <path d="M20 18h2"></path>
        <path d="m19.07 10.93-1.41 1.41"></path>
        <path d="M22 22H2"></path>
        <path d="m16 6-4 4-4-4"></path>
        <path d="M16 18a4 4 0 0 0-8 0"></path>
      </svg>
    )
  },
  {
    title: "Live Entertainment",
    description: "Experience electrifying performances from renowned DJs and artists, creating unforgettable nights on our dance floor.",
    icon: ({ className, size }: { className?: string, size?: number }) => (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
        width={size}
        height={size}
      >
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    )
  }
];

export default About;
