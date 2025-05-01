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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
            onClick={() => scrollToSection('home')}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Contact
          </button>
          <Button 
            size="lg" 
            className="gradient-bg text-white"
            onClick={() => scrollToSection('contact')}
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
              onClick={() => scrollToSection('home')}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left p-2 hover:text-accent"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left p-2 hover:text-accent"
            >
              Contact
            </button>
            <Button 
              size="lg" 
              className="w-full gradient-bg text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}