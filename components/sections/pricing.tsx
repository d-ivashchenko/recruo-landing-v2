"use client";

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingTierProps {
  name: string;
  price: { monthly: string; quarterly: string };
  description: string;
  features: string[];
  popularTag?: boolean;
  buttonText: string;
}

function PricingTier({ name, price, description, features, popularTag, buttonText, isQuarterly }: PricingTierProps & { isQuarterly: boolean }) {
  const displayPrice = isQuarterly ? price.quarterly : price.monthly;
  const discount = isQuarterly ? '20% off' : '';
  
  return (
    <Card className={`relative flex flex-col p-8 h-full transition-all duration-300 ${popularTag ? 'border-accent shadow-lg' : ''}`}>
      {popularTag && (
        <div className="absolute -top-3 right-8 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold">{displayPrice}</span>
          {price.monthly !== 'Custom' && (
            <span className="text-muted-foreground">/{isQuarterly ? 'quarter' : 'month'}</span>
          )}
          {isQuarterly && price.monthly !== 'Custom' && (
            <span className="ml-2 text-sm text-accent font-medium">{discount}</span>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="flex-1">
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button 
        className={`${popularTag ? 'gradient-bg text-white' : ''} w-full transition-all duration-300`}
        variant={popularTag ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </Card>
  );
}

export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false);
  
  const calculateQuarterlyPrice = (monthlyPrice: number) => {
    const quarterlyPrice = monthlyPrice * 3;
    const discount = quarterlyPrice * 0.2;
    return Math.round(quarterlyPrice - discount);
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: {
        monthly: "$499",
        quarterly: `$${calculateQuarterlyPrice(499)}`
      },
      description: "Perfect for small teams getting started with technical hiring.",
      features: [
        "AI resume screening (up to 100/month)",
        "Basic technical assessments",
        "Email support",
        "1 hiring team",
        "Basic analytics",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: {
        monthly: "$999",
        quarterly: `$${calculateQuarterlyPrice(999)}`
      },
      description: "For growing teams with regular technical hiring needs.",
      features: [
        "AI resume screening (up to 500/month)",
        "Advanced technical interviews",
        "Code execution & analysis",
        "Team collaboration tools",
        "Comprehensive analytics",
        "Priority support",
        "3 hiring teams",
      ],
      popularTag: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      price: {
        monthly: "Custom",
        quarterly: "Custom"
      },
      description: "For organizations with complex, high-volume hiring needs.",
      features: [
        "Unlimited AI screening",
        "Custom interview modules",
        "Advanced analytics & reporting",
        "API access & integrations",
        "Dedicated customer success",
        "White-labeling options",
        "Unlimited hiring teams",
        "SLA guarantees",
      ],
      buttonText: "Contact Sales",
    }
  ];
  
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="recruo-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your technical hiring needs. All plans include our core AI-powered features.
          </p>
          
          <div className="mt-8 inline-flex items-center bg-muted rounded-full p-1">
            <Button
              variant={isQuarterly ? "ghost" : "default"}
              className={`rounded-full transition-all duration-300 ${!isQuarterly ? 'gradient-bg text-white' : ''}`}
              onClick={() => setIsQuarterly(false)}
            >
              Monthly
            </Button>
            <Button
              variant={!isQuarterly ? "ghost" : "default"}
              className={`rounded-full transition-all duration-300 ${isQuarterly ? 'gradient-bg text-white' : ''}`}
              onClick={() => setIsQuarterly(true)}
            >
              Quarterly (-20%)
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} isQuarterly={isQuarterly} />
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">All Plans Include:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <p className="font-medium">Regular Platform Updates</p>
            </div>
            <div className="p-4">
              <p className="font-medium">99.9% Uptime SLA</p>
            </div>
            <div className="p-4">
              <p className="font-medium">Data Security & Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}