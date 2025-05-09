
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const Events = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const events = [
    {
      id: 1,
      title: "DJ Night with Alex Turner",
      date: "May 15, 2025",
      time: "9:00 PM - 2:00 AM",
      description: "Experience an electrifying night with international DJ Alex Turner spinning the hottest electronic tracks.",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Ladies Night Special",
      date: "May 20, 2025",
      time: "8:00 PM - 1:00 AM",
      description: "Ladies enjoy complimentary drinks and exclusive offers on our signature cocktails all night.",
      image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Weekend Retro Party",
      date: "May 23, 2025",
      time: "9:00 PM - 3:00 AM",
      description: "Dance to classic hits from the 80s and 90s with our resident DJ bringing back the golden era.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="events" className="py-20 bg-club-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`section-heading ${inView ? 'animate-fade-in' : ''}`}>
            UPCOMING <span className="text-club-gold">EVENTS</span>
          </h2>
          <p className={`section-text ${inView ? 'animate-fade-in' : ''}`}>
            Don't miss out on our exclusive events and themed nights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={cn(
                "glass overflow-hidden rounded-xl border border-white/5 group hover:border-club-gold/30 transition-all duration-300",
                inView ? 'opacity-0 animate-fade-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="h-40 relative overflow-hidden"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-display text-2xl text-white">{event.date.split(',')[0]}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">{event.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-club-gold">{event.date} • {event.time}</span>
                </div>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <button className="w-full py-3 border border-club-red text-club-red font-semibold rounded hover:bg-club-red hover:text-white transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className={cn(
              "btn-primary", 
              inView ? 'opacity-0 animate-fade-in' : 'opacity-0'
            )}
            style={{ animationDelay: '800ms' }}
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
