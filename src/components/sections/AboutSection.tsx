
import { Play } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-8 md:py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-800 animate-fade-in">About Program</h2>
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
             onClick={() => window.open('https://youtu.be/359RI-5jVVE', '_blank')}>
          <img 
            src="https://img.youtube.com/vi/359RI-5jVVE/maxresdefault.jpg" 
            alt="About Program Video" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
            <Play className="w-12 md:w-16 h-12 md:h-16 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm md:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to watch the program overview
          </div>
        </div>
        <p className="text-gray-600 text-sm md:text-base">Click to watch the program overview</p>
      </div>
    </section>
  );
};
