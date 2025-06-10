
import { Button } from '@/components/ui/button';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onEnroll: () => void;
}

export const Footer = ({ onNavigate, onEnroll }: FooterProps) => {
  return (
    <footer className="bg-card text-foreground py-8 md:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-primary">SSEI Markets</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted partner in stock market education and investment guidance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">About Program</button></li>
              <li><button onClick={() => onNavigate('experts')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">Our Experts</button></li>
              <li><button onClick={() => onNavigate('highlights')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">Program Highlights</button></li>
              <li><button onClick={() => onNavigate('demos')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">Demo Sessions</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('faq')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">FAQ</button></li>
              <li><button onClick={() => onNavigate('testimonials')} className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform">Testimonials</button></li>
              <li><span className="text-muted-foreground">Contact Support</span></li>
              <li><span className="text-muted-foreground">Course Access</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Get Started</h4>
            <Button 
              onClick={onEnroll}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-6 py-2 rounded-lg mb-4 transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              Enroll Now
            </Button>
            <p className="text-muted-foreground text-xs">
              Join thousands of successful traders and investors.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 SSEI Markets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
