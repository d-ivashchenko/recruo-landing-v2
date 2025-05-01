"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="recruo-container">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00] via-[#ff9500] to-[#ff7b00] opacity-80"></div>
          
          {/* Texture overlay */}
          <div className="absolute inset-0 sophisticated-dark-bg opacity-10"></div>
          
          {/* Content */}
          <div className="relative p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6">
                  Ready to transform your hiring process?
                </h2>
                <p className="text-white/90 text-xl mb-8">
                  Fill out the form to request a demo or learn more about how Recruo can help your organization find the right talent faster.
                </p>
                
                <div className="space-y-6 text-white/90">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Schedule a Demo</h3>
                      <p>See Recruo in action with a personalized demo for your team.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Custom Setup</h3>
                      <p>Our team will help you configure Recruo for your specific needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Start Hiring Better</h3>
                      <p>Launch your new recruitment process and start seeing results.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      type="text"
                      placeholder="Full Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Input 
                      type="text"
                      placeholder="Company"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Tell us about your recruitment needs"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-white hover:bg-white/90 text-accent hover:text-accent/90"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-4 text-white/80 text-sm text-center">
                  No credit card required. Get started with a free demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}