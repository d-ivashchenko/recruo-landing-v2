"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Rocket, Linkedin, Twitter } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Value({ icon, title, description }: ValueProps) {
  return (
    <Card className="p-6 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

function TeamMember({ name, title, description, imageUrl, linkedinUrl, twitterUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative rounded-lg overflow-hidden h-80 mb-4">
        <Image
          src={imageUrl}
          alt={`${name} - ${title} at Recruo`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-white/90">{title}</p>
          
          <div className="flex mt-2 space-x-2">
            {linkedinUrl && (
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {twitterUrl && (
              <a 
                href={twitterUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !teamRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const teamRect = teamRef.current.getBoundingClientRect();
      
      const isContainerVisible = containerRect.top < window.innerHeight * 0.75;
      const isTeamVisible = teamRect.top < window.innerHeight * 0.75;
      
      if (isContainerVisible) {
        containerRef.current.classList.add('animate-fade-up');
        containerRef.current.classList.remove('opacity-0');
      }
      
      if (isTeamVisible) {
        teamRef.current.classList.add('animate-fade-up');
        teamRef.current.classList.remove('opacity-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">About Recruo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize technical hiring through AI innovation and human-centered design.
          </p>
        </div>

        <div ref={containerRef} className="opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-6">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-8">
                Founded in 2024, Recruo emerged from a simple observation: technical hiring was broken. 
                Too many companies were missing out on great talent while candidates were frustrated with 
                outdated processes. We set out to change that by combining cutting-edge AI with deep 
                recruitment expertise.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to help companies of all sizes build stronger technical teams through 
                smarter, more efficient hiring processes. Our platform has processed over 10 000 
                technical assessments and helped companies reduce their time-to-hire by an average of 50%.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-2 md:p-4 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Recruo team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-outfit font-bold mb-12 text-center">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Value 
                icon={<Users className="h-6 w-6 text-accent" />}
                title="People First"
                description="We believe technology should enhance human potential, not replace it."
              />
              <Value 
                icon={<Target className="h-6 w-6 text-accent" />}
                title="Innovation Driven"
                description="We continuously push the boundaries of what's possible in recruitment."
              />
              <Value 
                icon={<Award className="h-6 w-6 text-accent" />}
                title="Quality Focused"
                description="We're committed to delivering excellence in every interaction."
              />
              <Value 
                icon={<Rocket className="h-6 w-6 text-accent" />}
                title="Future Ready"
                description="We build for tomorrow's challenges, today."
              />
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div ref={teamRef} className="mb-20 opacity-0">
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-6 text-center">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-16">
              We're a passionate team of HR veterans, engineers, and product designers on a mission
              to transform recruitment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember 
                name="Emma Richardson"
                title="CEO & Co-Founder"
                description="Former HR executive with 15+ years of experience transforming recruitment in tech companies."
                imageUrl="/images/team/emma-richardson.jpg"
                linkedinUrl="#"
                twitterUrl="#"
              />
              <TeamMember 
                name="David Zhang"
                title="CTO & Co-Founder"
                description="AI researcher and engineer passionate about applying machine learning to solve real-world problems."
                imageUrl="/images/team/xavier.jpeg"
                linkedinUrl="#"
                twitterUrl="#"
              />
              <TeamMember 
                name="Sophia Patel"
                title="Head of Product"
                description="Product leader focused on creating intuitive, powerful tools that transform how teams work."
                imageUrl="/images/team/sophia-patel.jpg"
                linkedinUrl="#"
              />
              <TeamMember 
                name="Marcus Johnson"
                title="Head of Customer Success"
                description="Dedicated to ensuring customers achieve their hiring goals and maximize their ROI with Recruo."
                imageUrl="/images/team/marcus-johnson.jpg"
                linkedinUrl="#"
                twitterUrl="#"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-outfit font-bold mb-6">Join Our Mission</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate people to join our team. If you're excited about 
              transforming technical hiring and building the future of recruitment, we'd love to 
              hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}