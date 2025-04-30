"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  imageSrc: string;
}

function Testimonial({ content, author, role, company, imageSrc }: TestimonialProps) {
  return (
    <Card className="bg-background p-8 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      <div>
        <QuoteIcon className="h-10 w-10 text-accent/30 mb-4" />
        <p className="text-foreground italic mb-6">"{content}"</p>
      </div>
      <div className="flex items-center mt-6">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={imageSrc}
            alt={author}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.testimonial-item');
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          setTimeout(() => {
            (el as HTMLElement).classList.add('animate-scale-in');
            (el as HTMLElement).style.opacity = '1';
          }, index * 150);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const testimonials = [
    {
      content: "Recruo has transformed our technical hiring process. We've reduced our time-to-hire by 60% while actually improving the quality of our technical team. The AI interviews are remarkably effective at identifying strong candidates.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFusion",
      imageSrc: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "As a growing startup, we needed to scale our engineering team quickly without compromising on quality. Recruo's AI screening saved us countless hours and helped us identify candidates we might have overlooked using traditional methods.",
      author: "Michael Chen",
      role: "VP of Engineering",
      company: "DataStack",
      imageSrc: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The insights we get from Recruo's analytics have completely changed our hiring strategy. We can now make data-driven decisions about which skills and backgrounds truly correlate with success in our engineering roles.",
      author: "Priya Patel",
      role: "Head of Talent",
      company: "InnovateCorp",
      imageSrc: "https://images.pexels.com/photos/6933744/pexels-photo-6933744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from companies that have transformed their technical hiring process with Recruo.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item opacity-0">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}