
import { useState, useEffect } from 'react';
import { Play, Clock, CheckCircle, Users, Star, Download, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-emerald-900 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">SSEI Markets</div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-emerald-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-emerald-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('experts')} className="hover:text-emerald-300 transition-colors">Experts</button>
              <button onClick={() => scrollToSection('highlights')} className="hover:text-emerald-300 transition-colors">Highlights</button>
              <button onClick={() => scrollToSection('demos')} className="hover:text-emerald-300 transition-colors">Demos</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-emerald-300 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-300 transition-colors">FAQ</button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-emerald-800 animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">About</button>
                <button onClick={() => scrollToSection('experts')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">Experts</button>
                <button onClick={() => scrollToSection('highlights')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">Highlights</button>
                <button onClick={() => scrollToSection('demos')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">Demos</button>
                <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">Testimonials</button>
                <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 hover:bg-emerald-700 rounded transition-colors">FAQ</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-8 text-center mt-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-700">100+</div>
                <div className="text-sm text-emerald-600">Pre-recorded Sessions</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-700">75+</div>
                <div className="text-sm text-emerald-600">Hours of Content</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-700">20+</div>
                <div className="text-sm text-emerald-600">Comprehensive Modules</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-700">1 Year</div>
                <div className="text-sm text-emerald-600">Course Validity</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-lg text-emerald-700 mb-8 font-semibold">
            Language: Hindi
          </div>
        </div>
      </section>

      {/* About Program Video Section */}
      <section id="about" className="px-4 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800 animate-fade-in">About Program</h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
               onClick={() => window.open('https://youtu.be/359RI-5jVVE', '_blank')}>
            <img 
              src="https://img.youtube.com/vi/359RI-5jVVE/maxresdefault.jpg" 
              alt="About Program Video" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Play className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </div>
          <p className="text-gray-600">Click to watch the program overview</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="line-through text-emerald-200">₹9,999</span>
            <span className="text-white ml-2">₹999/-</span>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">Minutes</div>
            </div>
            <div className="bg-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>
          
          <p className="text-emerald-100 mb-6">Offer Ending Soon!</p>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Meet the Expert Section */}
      <section id="experts" className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Meet the Experts</h2>
          
          {/* Sanjay Saraf Sir */}
          <Card className="mb-8 bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Sanjay Saraf Sir</h3>
                <p className="text-emerald-600 text-sm mb-4">(CFA, FRM, MS-FINANCE, CTM, CPM, CIB, CIIA)</p>
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/d4d0d310-56b1-4c0b-aa01-c9205128432b.png" 
                    alt="Sanjay Saraf" 
                    className="rounded-full w-32 h-32 object-cover border-4 border-emerald-500 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <h4 className="text-xl font-semibold text-emerald-800">A Visionary Leader in Finance, Trading, and Investment</h4>
                <p className="text-sm leading-relaxed">
                  Sanjay Saraf is a renowned expert in the fields of finance, trading, and investment, with over 25 years of experience that sets him apart in the industry. Known for his unparalleled expertise and commitment to excellence.
                </p>
                
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-800 mb-2">Key Achievements:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• SEBI-registered Research Analyst (Registration No INH000013882)</li>
                    <li className="flex items-start space-x-2">
                      <span>•</span>
                      <span className="flex-1">Gold Medal recipient honored by PM Dr. Manmohan Singh</span>
                      <img 
                        src="/lovable-uploads/1c16ac99-aaaf-4913-b737-25f39a10c1fe.png" 
                        alt="Gold Medal Award" 
                        className="w-16 h-16 object-cover rounded-md hover:scale-110 transition-transform duration-300"
                      />
                    </li>
                    <li>• Multiple prestigious certifications (CFA, FRM, CIIA, CPM, CTM, CIB)</li>
                    <li>• MS Finance from ICFAI, Hyderabad</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-800 mb-2">SEBI Registered Research Analyst:</h5>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/ce71541f-6baa-4f76-94d8-95386fc5ec7f.png" 
                      alt="SEBI Certificate" 
                      className="w-full max-w-xs object-contain rounded-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guddu Kumar Sir */}
          <Card className="bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Guddu Kumar Sir (G.K. Shaw)</h3>
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/f697f466-43b2-46d4-aa7d-8ae126d6895d.png" 
                    alt="Guddu Kumar Sir" 
                    className="rounded-full w-32 h-32 object-cover border-4 border-emerald-500 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <h4 className="text-xl font-semibold text-emerald-800">Trading with Expertise, Mentoring with Heart</h4>
                <p className="text-sm leading-relaxed">
                  A seasoned derivatives trader with 10+ years of active trading experience and one of the most respected mentors in the Indian trading education space. Successfully trained more than 10,000 students.
                </p>
                
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-800 mb-2">Expertise:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Co-founder of SSEI Markets and Optionology</li>
                    <li>• Runs a proprietary trading desk</li>
                    <li>• Expert in derivatives trading and strategy building</li>
                    <li>• Trained 10,000+ students in derivatives trading</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Highlights */}
      <section id="highlights" className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Program Highlights</h2>
          
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
              <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-emerald-200 hover:shadow-md transition-shadow duration-300 hover:scale-105 transform">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Sessions */}
      <section id="demos" className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Demo Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { url: "https://www.youtube.com/watch?v=QlYE6lFdcXs", id: "QlYE6lFdcXs" },
              { url: "https://www.youtube.com/watch?v=0z5XP4mVZrg", id: "0z5XP4mVZrg" }, 
              { url: "https://www.youtube.com/watch?v=yF_XihERwuM", id: "yF_XihERwuM" }
            ].map((video, index) => (
              <Card key={index} className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(video.url, '_blank')}>
                <CardContent className="p-4">
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                      alt={`Demo Session ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-semibold">Demo Session {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Repeat */}
      <section className="px-4 py-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Miss This Opportunity!</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="line-through text-emerald-200">₹9,999</span>
            <span className="text-white ml-2">₹999/-</span>
          </div>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Students Testimonials */}
      <section id="testimonials" className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Students' Testimonials</h2>
          
          <Card className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PLWTjbls1JHiFSAiVtJtpnP7iZ12hdFJ2e', '_blank')}>
            <CardContent className="p-6">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://img.youtube.com/vi/playlist?list=PLWTjbls1JHiFSAiVtJtpnP7iZ12hdFJ2e/maxresdefault.jpg" 
                  alt="Student Testimonials Playlist" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/640x360/10b981/ffffff?text=Student+Testimonials";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <p className="text-gray-600">Watch Success Stories from Our Students</p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="bg-white border-emerald-200 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Excellent program! The content is very comprehensive and easy to understand. Highly recommended for beginners."
                  </p>
                  <p className="text-emerald-700 text-sm mt-2 font-semibold">- Student {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Certificate</h2>
          <Card className="bg-white border-emerald-200 shadow-lg">
            <CardContent className="p-8">
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c1038b2f-0008-4e5b-b0b4-66d4ef18149a.png" 
                  alt="Certificate of Completion" 
                  className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600">
                Get a verified certificate upon successful completion of the program
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Who Can Join This Program?</h2>
          
          <p className="text-gray-600 text-center mb-8">
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
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-emerald-200 hover:shadow-md transition-shadow duration-300 hover:scale-105 transform">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trading and Investment */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-800 animate-fade-in">Why Trading and Investment?</h2>
          
          <Card className="bg-white border-emerald-200 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://youtu.be/TzGnw8Ujxeg', '_blank')}>
            <CardContent className="p-6">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://img.youtube.com/vi/TzGnw8Ujxeg/maxresdefault.jpg" 
                  alt="Why Trading and Investment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <p className="text-gray-600">Watch Sanjay Saraf Sir explain the importance of trading and investment</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Frequently Asked Questions</h2>
          
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
              <Card key={index} className="bg-white border-emerald-200 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-emerald-800 font-semibold mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Stock Market Journey?</h3>
          <div className="text-5xl font-bold mb-6">
            <span className="line-through text-emerald-200">₹9,999</span>
            <span className="text-white ml-2">₹999/-</span>
          </div>
          
          {/* Final Countdown */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-emerald-800 px-6 py-4 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-emerald-800 px-6 py-4 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-emerald-800 px-6 py-4 rounded-lg hover:bg-emerald-900 transition-colors">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <p className="text-emerald-100 mb-8 text-lg">Offer Ending Soon!</p>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now - Limited Time Offer!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SSEI Markets</h3>
              <p className="text-emerald-200 text-sm">
                Your trusted partner in stock market education and investment guidance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="text-emerald-200 hover:text-white transition-colors">About Program</button></li>
                <li><button onClick={() => scrollToSection('experts')} className="text-emerald-200 hover:text-white transition-colors">Our Experts</button></li>
                <li><button onClick={() => scrollToSection('highlights')} className="text-emerald-200 hover:text-white transition-colors">Program Highlights</button></li>
                <li><button onClick={() => scrollToSection('demos')} className="text-emerald-200 hover:text-white transition-colors">Demo Sessions</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('faq')} className="text-emerald-200 hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-emerald-200 hover:text-white transition-colors">Testimonials</button></li>
                <li><span className="text-emerald-200">Contact Support</span></li>
                <li><span className="text-emerald-200">Course Access</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <Button 
                onClick={handleEnrollNow}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg mb-4 transform hover:scale-105 transition-all duration-200"
              >
                Enroll Now
              </Button>
              <p className="text-emerald-200 text-xs">
                Join thousands of successful traders and investors.
              </p>
            </div>
          </div>
          
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
            <p className="text-emerald-300 text-sm">© 2024 SSEI Markets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
