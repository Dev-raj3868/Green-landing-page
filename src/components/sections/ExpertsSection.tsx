
import { Card, CardContent } from '@/components/ui/card';

export const ExpertsSection = () => {
  return (
    <section id="experts" className="px-4 py-8 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-emerald-800 animate-fade-in">Meet the Experts</h2>
        
        {/* Sanjay Saraf Sir */}
        <Card className="mb-8 bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <CardContent className="p-4 md:p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-2">Sanjay Saraf Sir</h3>
              <p className="text-emerald-600 text-xs md:text-sm mb-4">(CFA, FRM, MS-FINANCE, CTM, CPM, CIB, CIIA)</p>
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/d4d0d310-56b1-4c0b-aa01-c9205128432b.png" 
                  alt="Sanjay Saraf" 
                  className="rounded-full w-24 md:w-32 h-24 md:h-32 object-cover border-4 border-emerald-500 hover:scale-110 transition-transform duration-500 hover:border-emerald-600"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h4 className="text-lg md:text-xl font-semibold text-emerald-800">A Visionary Leader in Finance, Trading, and Investment</h4>
              <p className="text-xs md:text-sm leading-relaxed">
                Sanjay Saraf is a renowned expert in the fields of finance, trading, and investment, with over 25 years of experience that sets him apart in the industry. Known for his unparalleled expertise and commitment to excellence.
              </p>
              
              <div className="bg-emerald-50 p-3 md:p-4 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors duration-300">
                <h5 className="font-semibold text-emerald-800 mb-2 text-sm md:text-base">Key Achievements:</h5>
                <ul className="text-xs md:text-sm space-y-1">
                  <li>• SEBI-registered Research Analyst (Registration No INH000013882)</li>
                  <li className="flex items-start space-x-2">
                    <span>•</span>
                    <span className="flex-1">Gold Medal recipient honored by PM Dr. Manmohan Singh</span>
                    <img 
                      src="/lovable-uploads/1c16ac99-aaaf-4913-b737-25f39a10c1fe.png" 
                      alt="Gold Medal Award" 
                      className="w-12 md:w-16 h-12 md:h-16 object-cover rounded-md hover:scale-110 transition-transform duration-300"
                    />
                  </li>
                  <li>• Multiple prestigious certifications (CFA, FRM, CIIA, CPM, CTM, CIB)</li>
                  <li>• MS Finance from ICFAI, Hyderabad</li>
                </ul>
              </div>

              <div className="bg-emerald-50 p-3 md:p-4 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors duration-300">
                <h5 className="font-semibold text-emerald-800 mb-2 text-sm md:text-base">SEBI Registered Research Analyst:</h5>
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
        <Card className="bg-white border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
          <CardContent className="p-4 md:p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-800 mb-2">Guddu Kumar Sir (G.K. Shaw)</h3>
              <div className="mx-auto mb-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/f697f466-43b2-46d4-aa7d-8ae126d6895d.png" 
                  alt="Guddu Kumar Sir" 
                  className="rounded-full w-24 md:w-32 h-24 md:h-32 object-cover border-4 border-emerald-500 hover:scale-110 transition-transform duration-500 hover:border-emerald-600"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <h4 className="text-lg md:text-xl font-semibold text-emerald-800">Trading with Expertise, Mentoring with Heart</h4>
              <p className="text-xs md:text-sm leading-relaxed">
                A seasoned derivatives trader with 10+ years of active trading experience and one of the most respected mentors in the Indian trading education space. Successfully trained more than 10,000 students.
              </p>
              
              <div className="bg-emerald-50 p-3 md:p-4 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors duration-300">
                <h5 className="font-semibold text-emerald-800 mb-2 text-sm md:text-base">Expertise:</h5>
                <ul className="text-xs md:text-sm space-y-1">
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
  );
};
