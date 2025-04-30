"use client";

import { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Clock, Lightbulb, Target, TrendingUp, CheckCircle2, Award } from 'lucide-react';

const timeData = [
  { name: 'Traditional', value: 100 },
  { name: 'With Recruo', value: 50 },
];

const qualityData = [
  { name: 'Technical', traditional: 65, recruo: 90 },
  { name: 'Cultural', traditional: 60, recruo: 85 },
  { name: 'Retention', traditional: 55, recruo: 80 },
];

const COLORS = ['#3B82F6', '#BBDEFB'];

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75;
      
      if (isVisible) {
        containerRef.current.classList.add('animate-fade-up');
        containerRef.current.classList.remove('opacity-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">Why Choose Recruo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your technical hiring process with significant time savings, improved candidate quality, 
            and data-driven decision making.
          </p>
        </div>
        
        <div ref={containerRef} className="opacity-0 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-6">
                Reduce Hiring Time by 50%
              </h3>
              <p className="text-muted-foreground mb-8">
                Automate time-consuming parts of the hiring process while maintaining 
                or improving the quality of your technical hires.
              </p>
              
              <div className="space-y-8 mb-8">
                <Benefit 
                  icon={<Clock className="h-6 w-6 text-accent" />}
                  title="Faster Screening"
                  description="Automatically evaluate hundreds of applications in minutes instead of days."
                />
                <Benefit 
                  icon={<CheckCircle2 className="h-6 w-6 text-accent" />}
                  title="Automated Interviews"
                  description="Conduct initial technical interviews without scheduling coordination."
                />
                <Benefit 
                  icon={<TrendingUp className="h-6 w-6 text-accent" />}
                  title="Streamlined Workflow"
                  description="Integrate seamlessly with your existing hiring process and ATS."
                />
              </div>
            </div>
            
            <Card className="p-6 bg-background">
              <h4 className="text-lg font-medium mb-4">Average Time to Hire (Days)</h4>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={timeData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" barSize={40} radius={[0, 4, 4, 0]}>
                      {timeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="p-6 bg-background">
                <h4 className="text-lg font-medium mb-4">Candidate Quality Improvement (%)</h4>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={qualityData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="traditional" stroke="#94A3B8" strokeWidth={2} />
                      <Line type="monotone" dataKey="recruo" stroke="#3B82F6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-outfit font-bold mb-6">
                Improve Candidate Quality
              </h3>
              <p className="text-muted-foreground mb-8">
                Make better hiring decisions with objective, consistent technical 
                assessments and sophisticated matching algorithms.
              </p>
              
              <div className="space-y-8">
                <Benefit 
                  icon={<Lightbulb className="h-6 w-6 text-accent" />}
                  title="Objective Evaluation"
                  description="Eliminate bias with standardized, objective technical assessments."
                />
                <Benefit 
                  icon={<Target className="h-6 w-6 text-accent" />}
                  title="Precise Matching"
                  description="Find candidates who truly match your technical requirements and team culture."
                />
                <Benefit 
                  icon={<Award className="h-6 w-6 text-accent" />}
                  title="Reduce Bad Hires"
                  description="Minimize costly hiring mistakes with data-driven decision support."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}