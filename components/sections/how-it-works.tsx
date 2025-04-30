"use client";

import { useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.step-item');
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          setTimeout(() => {
            (el as HTMLElement).classList.add('animate-fade-up');
            (el as HTMLElement).style.opacity = '1';
          }, index * 150);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">How Recruo Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform seamlessly integrates with your hiring process, providing end-to-end automation and insights.
          </p>
        </div>
        
        <div ref={containerRef} className="relative">
          {/* Timeline connector - Hidden on mobile */}
          <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="step-item relative grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0">
              <div className="sm:text-right sm:pr-12">
                <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="pl-20 sm:pl-0">
                  <h3 className="text-2xl font-bold mb-4">Create Your Hiring Profile</h3>
                  <p className="text-muted-foreground mb-6">
                    Define your technical requirements, team culture, and ideal candidate profile 
                    to set up personalized AI screening and interview parameters.
                  </p>
                  <ul className="space-y-2">
                    {['Define required skills', 'Select interview modules', 'Customize assessment criteria'].map((item, i) => (
                      <li key={i} className="flex items-center sm:justify-end gap-2">
                        <span>{item}</span>
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Create your hiring profile"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="step-item relative grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0">
              <div className="order-2 sm:order-1 relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="/images/ai-screening-process.png" 
                    alt="AI screening process"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 sm:order-2 sm:pl-12">
                <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="pl-20 sm:pl-0">
                  <h3 className="text-2xl font-bold mb-4">AI Screening & Ranking</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI analyzes resumes, portfolios, and applications to identify 
                    and rank candidates based on your specific requirements.
                  </p>
                  <ul className="space-y-2">
                    {['Resume parsing & analysis', 'Technical skill validation', 'Candidate scoring & ranking'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="step-item relative grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0">
              <div className="sm:text-right sm:pr-12">
                <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="pl-20 sm:pl-0">
                  <h3 className="text-2xl font-bold mb-4">Conduct AI Interviews</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule automated technical interviews that adapt to candidate 
                    responses, with real-time code execution and evaluation.
                  </p>
                  <ul className="space-y-2">
                    {['Automated scheduling', 'Adaptive questioning', 'Code evaluation', 'Real-time feedback'].map((item, i) => (
                      <li key={i} className="flex items-center sm:justify-end gap-2">
                        <span>{item}</span>
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="AI Interview process"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="step-item relative grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0">
              <div className="order-2 sm:order-1 relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Review insights and analytics"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              <div className="order-1 sm:order-2 sm:pl-12">
                <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="pl-20 sm:pl-0">
                  <h3 className="text-2xl font-bold mb-4">Review Insights & Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Access comprehensive reports, analytics, and candidate comparisons to 
                    make data-driven hiring decisions with your team.
                  </p>
                  <ul className="space-y-2">
                    {['Detailed candidate profiles', 'Technical assessment reports', 'Skill gap analysis', 'Team collaboration tools'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}