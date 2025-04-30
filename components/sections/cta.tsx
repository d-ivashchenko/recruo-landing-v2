import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Cta() {
  return (
    <section id="cta" className="py-20">
      <div className="recruo-container">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 gradient-bg opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          
          <div className="relative p-12 md:p-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6 text-center">
                Ready to Transform Your Technical Hiring?
              </h2>
              <p className="text-white/90 text-xl mb-8 text-center">
                Get started with Recruo today and see how our AI-powered platform can revolutionize your recruitment process.
              </p>
              
              <div className="max-w-md mx-auto space-y-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button size="lg" className="w-full bg-white text-accent hover:bg-white/90">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <p className="mt-6 text-white/80 text-sm text-center">
                No credit card required. Get started with a free demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}