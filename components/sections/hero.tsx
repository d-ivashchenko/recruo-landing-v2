"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="recruo-container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-1.5 mb-8">
              <span className="text-accent font-medium">AI-Powered Recruitment</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-6">
              Transform Your{' '}
              <span className="text-accent">Hiring</span>
              <br />
              Process
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Enhance your recruitment with AI-powered screening and interviews. 
              Make data-driven hiring decisions that save time and find the best talent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://app.recruo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-bg text-white w-full sm:w-auto">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
                onClick={scrollToDemo}
              >
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                'AI-Powered Screening',
                'Technical Assessments',
                'Team Collaboration',
                'Intelligent Matching'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex-1 w-full max-w-xl relative">
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg border overflow-hidden">
                <img
                  src="/images/people_puzzle.png"
                  alt="Professional recruitment interaction"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* AI Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI Interviews</p>
                      <p className="text-xs text-accent font-bold">Smart</p>
                    </div>
                  </div>
                </div>
                
                {/* Time Saved Badge */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">⏱️</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Time Saved</p>
                      <p className="text-lg font-bold text-accent">50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}