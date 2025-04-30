"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Code, FileSearch, Users, BarChart3, Clock, Zap, Shield, Database } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg feature-card">
      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default function Features() {
  const [activeTab, setActiveTab] = useState("screening");
  
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">Powerful AI Recruitment Tools</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers comprehensive solutions to transform every stage of your technical hiring process.
          </p>
        </div>
        
        <Tabs defaultValue="screening" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="screening" className="text-base transition-all duration-300">AI Screening</TabsTrigger>
            <TabsTrigger value="interviews" className="text-base transition-all duration-300">AI Interviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="screening" className="mt-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-outfit font-bold mb-6" id="screening">
                  AI-Powered Candidate Screening
                </h3>
                <p className="text-muted-foreground mb-8">
                  Automatically analyze resumes, validate technical skills, and identify the most promising candidates 
                  with our advanced AI screening technology.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Feature 
                    icon={<FileSearch className="h-6 w-6 text-accent" />}
                    title="Intelligent Resume Parsing"
                    description="Extract and analyze key skills, experiences, and qualifications with precision."
                  />
                  <Feature 
                    icon={<Users className="h-6 w-6 text-accent" />}
                    title="Advanced Matching"
                    description="Match candidates to roles based on technical abilities, experience and team fit."
                  />
                  <Feature 
                    icon={<BarChart3 className="h-6 w-6 text-accent" />}
                    title="Candidate Ranking"
                    description="Objectively rank applicants based on comprehensive analysis of qualifications."
                  />
                  <Feature 
                    icon={<Clock className="h-6 w-6 text-accent" />}
                    title="50% Time Savings"
                    description="Cut screening time in half while improving the quality of selected candidates."
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in">
                <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="AI-powered candidate screening"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="interviews" className="mt-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-outfit font-bold mb-6" id="interviews">
                  AI Technical Interviews
                </h3>
                <p className="text-muted-foreground mb-8">
                  Conduct objective, thorough technical interviews with our advanced AI system that adapts in real-time 
                  and provides comprehensive candidate assessment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Feature 
                    icon={<Brain className="h-6 w-6 text-accent" />}
                    title="Adaptive Intelligence"
                    description="Dynamic interview flow that adjusts based on candidate responses and skill level."
                  />
                  <Feature 
                    icon={<Code className="h-6 w-6 text-accent" />}
                    title="Live Coding Analysis"
                    description="Real-time code execution, testing, and quality assessment across multiple languages."
                  />
                  <Feature 
                    icon={<Zap className="h-6 w-6 text-accent" />}
                    title="Instant Feedback"
                    description="Immediate, detailed feedback on technical performance and problem-solving approach."
                  />
                  <Feature 
                    icon={<Database className="h-6 w-6 text-accent" />}
                    title="Comprehensive Coverage"
                    description="Support for 30+ programming languages and all major frameworks."
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in">
                <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                  <Image
                    src="/images/google-meet-like-image.png"
                    alt="AI technical interview"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}