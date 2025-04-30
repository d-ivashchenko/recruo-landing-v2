"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-banner ${!isVisible ? 'hidden' : ''}`}>
      <div className="recruo-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-sm"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="gradient-bg text-white text-sm"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}