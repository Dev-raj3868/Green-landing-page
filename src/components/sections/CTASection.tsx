
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEnrollNow = () => {
    window.open('https://www.sseimarkets.com/product/stock-market-foundation-program-a-complete-course-on-stock-market', '_blank');
  };

  return (
    <section className="px-4 py-8 bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-xl md:text-2xl font-bold mb-4 animate-bounce text-primary-foreground">Limited Time Offer</h3>
        <div className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
          <span className="line-through text-primary-foreground/70">₹9,999</span>
          <span className="text-primary-foreground ml-2">₹999/-</span>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex justify-center gap-2 md:gap-4 mb-6">
          {[
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((time, index) => (
            <div key={index} className="bg-background px-3 md:px-4 py-2 rounded-lg hover:bg-card transition-all duration-300 transform hover:scale-110">
              <div className="text-xl md:text-2xl font-bold text-primary">{time.value}</div>
              <div className="text-xs text-foreground">{time.label}</div>
            </div>
          ))}
        </div>
        
        <p className="text-primary-foreground/80 mb-6 animate-pulse">Offer Ending Soon!</p>
        
        <Button 
          onClick={handleEnrollNow}
          className="bg-background text-primary hover:bg-card px-6 md:px-8 py-3 text-base md:text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          Enroll Now
        </Button>
      </div>
    </section>
  );
};
