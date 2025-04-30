"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleFeatureClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="recruo-container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleFeatureClick}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={handleContactClick}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Contacts
          </button>
          <Button 
            size="lg" 
            className="gradient-bg text-white"
            onClick={handleContactClick}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t mt-4">
          <div className="recruo-container py-4 space-y-4">
            <button 
              onClick={handleFeatureClick}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Features
            </button>
            <button 
              onClick={handleContactClick}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Contacts
            </button>
            <Button 
              size="lg" 
              className="w-full gradient-bg text-white"
              onClick={handleContactClick}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}