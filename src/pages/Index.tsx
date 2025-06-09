
import { CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExpertsSection } from '@/components/sections/ExpertsSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  const handleEnrollNow = () => {
    window.open('https://www.sseimarkets.com/product/stock-market-foundation-program-a-complete-course-on-stock-market', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar onNavigate={scrollToSection} />
      
      <HeroSection />
      
      <AboutSection />
      
      <CTASection />
      
      <ExpertsSection />

      {/* Program Highlights */}
      <section id="highlights" className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Program Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "100+ Pre-recorded Sessions",
              "75+ Hours of Content", 
              "20+ Comprehensive Modules",
              "Course Validity: 1 Year",
              "Beginner-Friendly",
              "Fully Practical Approach",
              "Comprehensive Coverage",
              "Interactive Learning",
              "Personalized Support",
              "Risk Management Techniques",
              "Easy-to-understand Hindi & English Mix",
              "Multiple Market Segments",
              "Doubt-Solving Support"
            ].map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-3 md:p-4 rounded-lg border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 text-sm md:text-base group-hover:text-emerald-700 transition-colors duration-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Sessions */}
      <section id="demos" className="px-4 py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Demo Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { url: "https://www.youtube.com/watch?v=QlYE6lFdcXs", id: "QlYE6lFdcXs" },
              { url: "https://www.youtube.com/watch?v=0z5XP4mVZrg", id: "0z5XP4mVZrg" }, 
              { url: "https://www.youtube.com/watch?v=yF_XihERwuM", id: "yF_XihERwuM" }
            ].map((video, index) => (
              <Card key={index} className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
                    onClick={() => window.open(video.url, '_blank')}>
                <CardContent className="p-4">
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={`Demo Session ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                      <Play className="w-8 md:w-12 h-8 md:h-12 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-semibold text-sm md:text-base group-hover:text-emerald-700 transition-colors duration-300">Demo Session {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Repeat */}
      <CTASection />

      {/* Students Testimonials */}
      <section id="testimonials" className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Students' Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { url: "https://www.youtube.com/watch?v=4EbvPU88plE", id: "4EbvPU88plE", title: "Student Success Story 1" },
              { url: "https://www.youtube.com/watch?v=MBVVSQIK2j0", id: "MBVVSQIK2j0", title: "Student Success Story 2" },
              { url: "https://www.youtube.com/watch?v=BSsQvGBRrTo", id: "BSsQvGBRrTo", title: "Student Success Story 3" },
              { url: "https://www.youtube.com/watch?v=XQDuxsVveKk", id: "XQDuxsVveKk", title: "Student Success Story 4" }
            ].map((video, index) => (
              <Card key={index} className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
                    onClick={() => window.open(video.url, '_blank')}>
                <CardContent className="p-4">
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                      <Play className="w-8 md:w-12 h-8 md:h-12 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-semibold text-sm md:text-base group-hover:text-emerald-700 transition-colors duration-300">{video.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="px-4 py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Certificate</h2>
          <Card className="bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-6 md:p-8">
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c1038b2f-0008-4e5b-b0b4-66d4ef18149a.png" 
                  alt="Certificate of Completion" 
                  className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Get a verified certificate upon successful completion of the program
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Who Can Join This Program?</h2>
          
          <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
            This program is designed for anyone who wants to build a solid foundation in the stock market, whether you're a complete beginner or someone looking to strengthen your basics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Students who want to understand stock market functioning early in their careers",
              "Working Professionals planning to create an additional income stream",
              "Aspiring Traders & Investors who want structured learning",
              "Entrepreneurs & Business Owners looking to diversify their capital",
              "CA, CFA, MBA Aspirants or Finance Students aiming to gain practical insights",
              "Home-makers & Retirees interested in building wealth",
              "Anyone confused by market noise and seeking a clear approach",
              "Self-learners who need structured mentorship"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-3 md:p-4 rounded-lg border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 text-xs md:text-sm group-hover:text-emerald-700 transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trading and Investment */}
      <section className="px-4 py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Why Trading and Investment?</h2>
          
          <Card className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:scale-105 group"
                onClick={() => window.open('https://youtu.be/TzGnw8Ujxeg', '_blank')}>
            <CardContent className="p-4 md:p-6">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://img.youtube.com/vi/TzGnw8Ujxeg/maxresdefault.jpg" 
                  alt="Why Trading and Investment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                  <Play className="w-12 md:w-16 h-12 md:h-16 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-base">Watch Sanjay Saraf Sir explain the importance of trading and investment</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How will I get access to the classes after enrolling?",
                a: "After enrolling, you will receive an email with a link to the SSEI Markets Learning Platform. Click the link, install the app if required, and log in using your registered mobile number."
              },
              {
                q: "How are doubts resolved during the course?",
                a: "You can ask questions through the 'Ask a Question' option on the platform. Our expert faculty team will provide detailed responses within 48 hours."
              },
              {
                q: "Is it okay if I have no finance or stock market background?",
                a: "Absolutely! This program is specifically designed for those with no prior experience. Everything is explained from the very basics."
              },
              {
                q: "In which language is the program taught?",
                a: "The program is delivered in a mix of English and Hindi, with predominantly Hindi explanations for better understanding."
              },
              {
                q: "Can I access the course on a mobile or laptop?",
                a: "Yes, the course is compatible with all major devices — mobile phones, laptops, tablets, Windows PCs, MacBooks, Android, and iOS."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-emerald-800 font-semibold mb-3 text-sm md:text-base group-hover:text-emerald-900 transition-colors duration-300">{faq.q}</h3>
                  <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors duration-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-8 md:py-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-green-600/90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-bounce">Ready to Start Your Stock Market Journey?</h3>
          <div className="text-4xl md:text-5xl font-bold mb-6 animate-pulse">
            <span className="line-through text-emerald-200">₹9,999</span>
            <span className="text-white ml-2">₹999/-</span>
          </div>
          
          <p className="text-emerald-100 mb-8 text-base md:text-lg animate-pulse">Offer Ending Soon!</p>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            Enroll Now - Limited Time Offer!
          </Button>
        </div>
      </section>

      <Footer onNavigate={scrollToSection} onEnroll={handleEnrollNow} />
    </div>
  );
};

export default Index;
