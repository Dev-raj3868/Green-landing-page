
import { useState, useEffect } from 'react';
import { Play, Clock, CheckCircle, Users, Star, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 text-white">
      {/* Hero Section */}
      <section className="px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
            Stock Market Foundation Program
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-emerald-100">
            A Complete Course on the Stock Market
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card className="bg-emerald-800/50 border-emerald-600">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-300">100+</div>
                <div className="text-sm text-emerald-200">Pre-recorded Sessions</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-800/50 border-emerald-600">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-300">75+</div>
                <div className="text-sm text-emerald-200">Hours of Content</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-800/50 border-emerald-600">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-300">20+</div>
                <div className="text-sm text-emerald-200">Comprehensive Modules</div>
              </CardContent>
            </Card>
            <Card className="bg-emerald-800/50 border-emerald-600">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-300">1 Year</div>
                <div className="text-sm text-emerald-200">Course Validity</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-lg text-emerald-200 mb-8">
            Language: Hindi
          </div>
        </div>
      </section>

      {/* About Program Video Section */}
      <section className="px-4 py-8 bg-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-300">About Program</h2>
          <div className="aspect-video bg-emerald-800 rounded-lg flex items-center justify-center mb-4 cursor-pointer hover:bg-emerald-700 transition-colors"
               onClick={() => window.open('https://youtu.be/359RI-5jVVE', '_blank')}>
            <Play className="w-16 h-16 text-emerald-300" />
          </div>
          <p className="text-emerald-200">Click to watch the program overview</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 bg-gradient-to-r from-emerald-800 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-emerald-100">Limited Time Offer</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="line-through text-emerald-400">₹9,999</span>
            <span className="text-green-300 ml-2">₹999/-</span>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-emerald-950 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-emerald-950 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">Minutes</div>
            </div>
            <div className="bg-emerald-950 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>
          
          <p className="text-emerald-200 mb-6">Offer Ending Soon!</p>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Meet the Expert Section */}
      <section className="px-4 py-12 bg-emerald-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-300">Meet the Experts</h2>
          
          {/* Sanjay Saraf Sir */}
          <Card className="mb-8 bg-emerald-900/30 border-emerald-600">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">Sanjay Saraf Sir</h3>
                <p className="text-emerald-200 text-sm mb-4">(CFA, FRM, MS-FINANCE, CTM, CPM, CIB, CIIA)</p>
                <div className="w-32 h-32 bg-emerald-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-emerald-300" />
                </div>
              </div>
              
              <div className="space-y-4 text-emerald-100">
                <h4 className="text-xl font-semibold text-emerald-300">A Visionary Leader in Finance, Trading, and Investment</h4>
                <p className="text-sm leading-relaxed">
                  Sanjay Saraf is a renowned expert in the fields of finance, trading, and investment, with over 25 years of experience that sets him apart in the industry. Known for his unparalleled expertise and commitment to excellence.
                </p>
                
                <div className="bg-emerald-800/50 p-4 rounded-lg">
                  <h5 className="font-semibold text-emerald-300 mb-2">Key Achievements:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• SEBI-registered Research Analyst (Registration No INH000013882)</li>
                    <li>• Gold Medal recipient honored by PM Dr. Manmohan Singh</li>
                    <li>• Multiple prestigious certifications (CFA, FRM, CIIA, CPM, CTM, CIB)</li>
                    <li>• MS Finance from ICFAI, Hyderabad</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guddu Kumar Sir */}
          <Card className="bg-emerald-900/30 border-emerald-600">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">Guddu Kumar Sir (G.K. Shaw)</h3>
                <div className="w-32 h-32 bg-emerald-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-emerald-300" />
                </div>
              </div>
              
              <div className="space-y-4 text-emerald-100">
                <h4 className="text-xl font-semibold text-emerald-300">Trading with Expertise, Mentoring with Heart</h4>
                <p className="text-sm leading-relaxed">
                  A seasoned derivatives trader with 10+ years of active trading experience and one of the most respected mentors in the Indian trading education space. Successfully trained more than 10,000 students.
                </p>
                
                <div className="bg-emerald-800/50 p-4 rounded-lg">
                  <h5 className="font-semibold text-emerald-300 mb-2">Expertise:</h5>
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
      <section className="px-4 py-12 bg-emerald-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-300">Program Highlights</h2>
          
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
              <div key={index} className="flex items-center space-x-3 bg-emerald-800/30 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-emerald-100">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Sessions */}
      <section className="px-4 py-12 bg-emerald-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-300">Demo Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://www.youtube.com/watch?v=QlYE6lFdcXs",
              "https://www.youtube.com/watch?v=0z5XP4mVZrg", 
              "https://www.youtube.com/watch?v=yF_XihERwuM"
            ].map((link, index) => (
              <Card key={index} className="bg-emerald-800/30 border-emerald-600 cursor-pointer hover:bg-emerald-700/50 transition-colors"
                    onClick={() => window.open(link, '_blank')}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-emerald-800 rounded-lg flex items-center justify-center mb-3">
                    <Play className="w-12 h-12 text-emerald-300" />
                  </div>
                  <p className="text-center text-emerald-200">Demo Session {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Repeat */}
      <section className="px-4 py-8 bg-gradient-to-r from-emerald-800 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-emerald-100">Don't Miss This Opportunity!</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="line-through text-emerald-400">₹9,999</span>
            <span className="text-green-300 ml-2">₹999/-</span>
          </div>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Students Testimonials */}
      <section className="px-4 py-12 bg-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-300">Students' Testimonials</h2>
          
          <Card className="bg-emerald-800/30 border-emerald-600 cursor-pointer hover:bg-emerald-700/50 transition-colors mb-6"
                onClick={() => window.open('https://www.youtube.com/playlist?list=PLWTjbls1JHiFSAiVtJtpnP7iZ12hdFJ2e', '_blank')}>
            <CardContent className="p-6">
              <div className="aspect-video bg-emerald-800 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-emerald-300" />
              </div>
              <p className="text-emerald-200">Watch Success Stories from Our Students</p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="bg-emerald-800/30 border-emerald-600">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-emerald-200 text-sm italic">
                    "Excellent program! The content is very comprehensive and easy to understand. Highly recommended for beginners."
                  </p>
                  <p className="text-emerald-300 text-sm mt-2 font-semibold">- Student {index + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="px-4 py-12 bg-emerald-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-300">Certificate</h2>
          <Card className="bg-emerald-800/30 border-emerald-600">
            <CardContent className="p-8">
              <div className="w-64 h-48 bg-emerald-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-900" />
                  </div>
                  <p className="text-emerald-300 font-bold">Certificate of Completion</p>
                </div>
              </div>
              <p className="text-emerald-200">
                Get a verified certificate upon successful completion of the program
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="px-4 py-12 bg-emerald-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-300">Who Can Join This Program?</h2>
          
          <p className="text-emerald-200 text-center mb-8">
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
              <div key={index} className="flex items-start space-x-3 bg-emerald-800/30 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trading and Investment */}
      <section className="px-4 py-12 bg-emerald-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-300">Why Trading and Investment?</h2>
          
          <Card className="bg-emerald-800/30 border-emerald-600 cursor-pointer hover:bg-emerald-700/50 transition-colors"
                onClick={() => window.open('https://youtu.be/TzGnw8Ujxeg', '_blank')}>
            <CardContent className="p-6">
              <div className="aspect-video bg-emerald-800 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-emerald-300" />
              </div>
              <p className="text-emerald-200">Watch Sanjay Saraf Sir explain the importance of trading and investment</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 bg-emerald-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-300">Frequently Asked Questions</h2>
          
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
              <Card key={index} className="bg-emerald-800/30 border-emerald-600">
                <CardContent className="p-6">
                  <h3 className="text-emerald-300 font-semibold mb-3">{faq.q}</h3>
                  <p className="text-emerald-200 text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 bg-gradient-to-r from-emerald-800 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-emerald-100">Ready to Start Your Stock Market Journey?</h3>
          <div className="text-5xl font-bold mb-6">
            <span className="line-through text-emerald-400">₹9,999</span>
            <span className="text-green-300 ml-2">₹999/-</span>
          </div>
          
          {/* Final Countdown */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-emerald-950 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-emerald-950 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-emerald-950 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <p className="text-emerald-200 mb-8 text-lg">Offer Ending Soon!</p>
          
          <Button 
            onClick={handleEnrollNow}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-4 text-xl font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Enroll Now - Limited Time Offer!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-emerald-950 text-center">
        <p className="text-emerald-400">© 2024 SSEI Markets. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
